import express from "express";
import fs from "fs";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";

// Chuyển đổi __dirname trong ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const dataFilePath = path.join(__dirname, "src/assets/Data/data.json");

// Đọc dữ liệu từ file JSON
const readData = () => {
    try {
        const data = fs.readFileSync(dataFilePath);
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

// Ghi dữ liệu vào file JSON
const writeData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

// Cấu hình multer để lưu ảnh vào thư mục uploads/
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, "uploads");
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

// API đăng ký tài khoản
// app.post("/signup", (req, res) => {
//     const users = readData();
//     const { name, email, phone, address, password, role } = req.body;

//     // Kiểm tra email đã tồn tại chưa
//     if (users.some((user) => user.email === email)) {
//         return res.status(400).json({ message: "Email đã tồn tại!" });
//     }

//     // Tạo user mới (Không có avatar lúc đầu)
//     const newUser = { name, email, phone, address, password, role, avatar: null };
//     users.push(newUser);
//     writeData(users);

//     res.json({ message: "Đăng ký thành công!", user: newUser });
// });

app.post("/signup", (req, res) => {
    const users = readData();
    const { name, email, phone, address, password } = req.body;
    // Kiểm tra email đã tồn tại chưa
    if (users.some((user) => user.email === email)) {
        return res.status(400).json({ message: "Email đã tồn tại!" });
    }

    // Tạo user mới với vai trò mặc định là "admin"
    const newUser = { name, email, phone, address, password, role: "Khách hàng", avatar: null };
    users.push(newUser);
    writeData(users);

    res.json({ message: "Đăng ký thành công!", user: newUser });
});

// API cập nhật ảnh đại diện
app.post("/update-avatar", upload.single("avatar"), (req, res) => {
    const users = readData();
    const { email } = req.body;

    // Tìm user theo email
    const userIndex = users.findIndex((user) => user.email === email);
    if (userIndex === -1) {
        return res.status(404).json({ message: "Người dùng không tồn tại!" });
    }

    // Lưu đường dẫn ảnh mới
    const avatarPath = req.file ? `/uploads/${req.file.filename}` : null;
    if (!avatarPath) {
        return res.status(400).json({ message: "Không có ảnh được tải lên!" });
    }

    // Xóa ảnh cũ nếu có
    const oldAvatar = users[userIndex].avatar;
    if (oldAvatar) {
        const oldAvatarPath = path.join(__dirname, oldAvatar);
        if (fs.existsSync(oldAvatarPath)) {
            fs.unlinkSync(oldAvatarPath); // Xóa file cũ
        }
    }

    // Cập nhật ảnh mới vào data.json
    users[userIndex].avatar = avatarPath;
    writeData(users);

    res.json({ message: "Cập nhật ảnh đại diện thành công!", avatar: avatarPath });
});

app.post("/update-profile", upload.single("avatar"), (req, res) => {
    const users = readData();
    const { email, name, phone, address } = req.body;

    // Tìm user theo email
    const userIndex = users.findIndex((user) => user.email === email);
    if (userIndex === -1) {
        return res.status(404).json({ message: "Người dùng không tồn tại!" });
    }

    // Cập nhật thông tin mới
    users[userIndex].name = name;
    users[userIndex].phone = phone;
    users[userIndex].address = address;

    // Nếu có ảnh mới, cập nhật avatar
    if (req.file) {
        const avatarPath = `/uploads/${req.file.filename}`;
        // Xóa ảnh cũ nếu có
        const oldAvatar = users[userIndex].avatar;
        if (oldAvatar) {
            const oldAvatarPath = path.join(__dirname, oldAvatar);
            if (fs.existsSync(oldAvatarPath)) {
                fs.unlinkSync(oldAvatarPath);
            }
        }

        users[userIndex].avatar = avatarPath;
    }

    // Ghi lại file JSON
    writeData(users);

    res.json({ message: "Cập nhật thông tin thành công!", user: users[userIndex] });
});

// Cho phép truy cập ảnh từ thư mục uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Chạy server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
