import express from "express";
import fs from "fs";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Chuyển đổi __dirname trong ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());

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

// API xử lý đăng ký tài khoản
app.post("/signup", (req, res) => {
    const users = readData();
    const { name, email, phone, address, password, role } = req.body;

    // Kiểm tra email đã tồn tại chưa
    if (users.some((user) => user.email === email)) {
        return res.status(400).json({ message: "Email đã tồn tại!" });
    }

    // Tạo user mới (Không có confirmPassword)
    const newUser = { name, email, phone, address, password, role };
    users.push(newUser);
    writeData(users);

    res.json({ message: "Đăng ký thành công!", user: newUser });
});

// Chạy server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
