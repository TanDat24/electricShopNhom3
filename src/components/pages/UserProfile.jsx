<<<<<<< HEAD
import { useState, useEffect } from "react";

const UserProfile = () => {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    phone: "",
    role: "user",
    avatar: null,
  });

  const [avatarPreview, setAvatarPreview] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const mockData = {
        username: "",
        name: "",
        email: "",
        phone: "",
        role: "",
        avatar: null,
      };

      setFormData(mockData);
      setLoading(false);
    }, 1000);

    return () => {};
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
=======
import React, { useState, useEffect } from "react";
import userList from "../../assets/Data/data.json";

const UserProfile = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userEmail, setUserEmail] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        role: "",
        avatar: "",
>>>>>>> f1d5cb053aa52cce95bc525027c4747378020eb9
    });
  };

<<<<<<< HEAD
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.match(/image\/(jpeg|png)/)) {
      alert("Chỉ chấp nhận file JPEG hoặc PNG!");
      return;
    }

    if (file.size > 1024 * 1024) {
      alert("Dung lượng file tối đa 1MB!");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarPreview(reader.result);
      setFormData((prev) => ({
        ...prev,
        avatar: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated data:", formData);
  };

  if (loading)
    return <div className="text-center p-20">Đang tải dữ liệu...</div>;

  return (
    <div className="flex justify-center items-start gap-8 p-8 mt-20">
      {/* Sidebar upload ảnh */}
      <div className="bg-white shadow-md rounded-lg p-6 w-64">
        <h3 className="text-lg font-semibold mb-4">Ảnh đại diện</h3>

        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 mb-4">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-200 bg-gray-100">
              {avatarPreview ? (
                <img
                  src={avatarPreview}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400 text-3xl">👤</span>
=======
    useEffect(() => {
        const userJson = localStorage.getItem("user");
        let currentUser = null;

        if (userJson) {
            try {
                currentUser = JSON.parse(userJson);
            } catch (error) {
                console.error("Lỗi parse JSON:", error);
            }
        }

        const currentUserEmail = currentUser?.email || "";
        setUserEmail(currentUserEmail);

        const user = userList.find((u) => u.email === currentUserEmail);
        if (user) {
            setFormData({
                username: user.email.split("@")[0],
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role,
                avatar: user.avatar || "", // Lưu avatar từ dữ liệu
            });
        } else {
            console.error("Không tìm thấy user!");
        }

        setLoading(false);
    }, []);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.match(/image\/(jpeg|png)/)) {
            alert("Chỉ chấp nhận file JPEG hoặc PNG!");
            return;
        }

        if (file.size > 1024 * 1024) {
            alert("Dung lượng file tối đa 1MB!");
            return;
        }

        setSelectedFile(file);
        const reader = new FileReader();
        reader.onloadend = () => setAvatarPreview(reader.result);
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const uploadData = new FormData();
        uploadData.append("email", formData.email);
        uploadData.append("name", formData.name);
        uploadData.append("phone", formData.phone);
        uploadData.append("address", formData.address);

    
        if (selectedFile) {
            uploadData.append("avatar", selectedFile);
        }
    
        try {
            const response = await fetch("http://localhost:5000/update-profile", {
                method: "POST",
                body: uploadData,
            });
    
            if (!response.ok) throw new Error("Lỗi cập nhật thông tin");
            
            alert("Thông tin đã được cập nhật!");
        } catch (error) {
            alert("Lỗi khi cập nhật: " + error.message);
        }
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    return (
        <div className="flex justify-center items-start gap-8 p-8 mt-20">
            <div className="bg-white shadow-md rounded-lg p-6 w-64">
                <h3 className="text-lg font-semibold mb-4">Ảnh đại diện</h3>
                <div className="flex flex-col items-center">
                    <div className="relative w-32 h-32 mb-4">
                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-200 bg-gray-100">
                            {(avatarPreview || formData.avatar) ? (
                                <img
                                    src={avatarPreview || formData.avatar}
                                    alt="Avatar"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <span className="text-gray-400 text-3xl">👤</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <label className="cursor-pointer mb-2">
                        <input type="file" className="hidden" accept="image/jpeg, image/png" onChange={handleAvatarChange} />
                        <div className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
                            Chọn ảnh mới
                        </div>
                    </label>
                    <div className="text-xs text-gray-500 text-center">
                        <p>Dung lượng tối đa 1 MB</p>
                        <p>Định dạng: JPEG, PNG</p>
                    </div>
>>>>>>> f1d5cb053aa52cce95bc525027c4747378020eb9
                </div>
              )}
            </div>
          </div>

<<<<<<< HEAD
          <label className="cursor-pointer mb-2">
            <input
              type="file"
              className="hidden"
              accept="image/jpeg, image/png"
              onChange={handleAvatarChange}
            />
            <div className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
              Chọn ảnh mới
            </div>
          </label>

          <div className="text-xs text-gray-500 text-center">
            <p>Dung lượng tối đa 1 MB</p>
            <p>Định dạng: JPEG, PNG</p>
          </div>
=======
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 flex-1 max-w-2xl">
                <h2 className="text-xl font-bold text-gray-700 mb-2">Hồ Sơ Người Dùng</h2>
                <p className="text-gray-500 text-sm mb-6">Quản lý thông tin tài khoản</p>
                <div className="space-y-4">
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-1">Họ và tên</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border-b pb-2 focus:outline-none focus:border-red-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between items-center">
                            <label className="block text-gray-600 text-sm mb-1">Email</label>
                            <button
                                type="button"
                                className="text-red-500 text-sm hover:text-red-600 transition-colors"
                            >
                                Xác thực email
                            </button>
                        </div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            disabled
                            className="w-full border-b pb-2 bg-gray-50 text-gray-500 cursor-not-allowed"
                        />
                    </div>

                    <div className="mb-4">
                        <div className="flex justify-between items-center">
                            <label className="block text-gray-600 text-sm mb-1">Số điện thoại</label>
                            <button
                                type="button"
                                className="text-red-500 text-sm hover:text-red-600 transition-colors"
                            >
                                Cập nhật số mới
                            </button>
                        </div>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border-b pb-2 focus:outline-none focus:border-red-500"
                            pattern="[0-9]{10}"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm mb-1">Địa chỉ</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address || ""}
                            onChange={handleChange}
                            className="w-full border-b pb-2 focus:outline-none focus:border-red-500"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-600 text-sm mb-1">Vai trò</label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                            disabled
                        >
                            <option value="admin">Quản trị viên</option>
                            <option value="staff">Nhân viên</option>
                            <option value="customer">Khách hàng</option>
                        </select>
                    </div>
                </div>

                <button
                    type="submit"
                    title="Lưu lại các thay đổi"
                    className="w-full bg-red-500 text-white py-2.5 rounded-md mt-4 hover:bg-red-600 transition-colors font-medium"
                >
                    Lưu thay đổi
                </button>
            </form>
>>>>>>> f1d5cb053aa52cce95bc525027c4747378020eb9
        </div>
      </div>

      {/* Form thông tin */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 flex-1 max-w-2xl"
      >
        <h2 className="text-xl font-bold text-gray-700 mb-2">
          Hồ Sơ Người Dùng
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Quản lý thông tin tài khoản
        </p>

        <div className="space-y-4">
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">
              Họ và tên
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b pb-2 focus:outline-none focus:border-red-500"
              required
            />
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center">
              <label className="block text-gray-600 text-sm mb-1">Email</label>
              <button
                type="button"
                className="text-red-500 text-sm hover:text-red-600 transition-colors"
              >
                Xác thực email
              </button>
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              disabled
              className="w-full border-b pb-2 bg-gray-50 text-gray-500 cursor-not-allowed"
            />
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center">
              <label className="block text-gray-600 text-sm mb-1">
                Số điện thoại
              </label>
              <button
                type="button"
                className="text-red-500 text-sm hover:text-red-600 transition-colors"
              >
                Cập nhật số mới
              </button>
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-b pb-2 focus:outline-none focus:border-red-500"
              pattern="[0-9]{10}"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-1">Địa chỉ</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              disabled
              className="w-full border-b pb-2 bg-gray-50 text-gray-500 cursor-not-allowed"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-600 text-sm mb-1">Vai trò</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              disabled
            >
              <option value="admin">Quản trị viên</option>
              <option value="staff">Nhân viên</option>
              <option value="customer">Khách hàng</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2.5 rounded-md mt-4 hover:bg-red-600 transition-colors font-medium"
        >
          Lưu thay đổi
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
