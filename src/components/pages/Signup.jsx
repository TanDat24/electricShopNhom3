import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
    role: "Nhân viên",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Xử lý thay đổi input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Xử lý đăng ký
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra mật khẩu nhập lại có khớp không
    if (formData.password !== formData.confirmPassword) {
      setError("Mật khẩu nhập lại không khớp!");
      return;
    }

    
    const { confirmPassword, ...dataToSend } = formData;

    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend), // Không gửi confirmPassword
      });

      const data = await response.json();
      if (response.ok) {
        alert("Đăng ký thành công!");
        navigate("/vn/login"); 
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error("Lỗi:", err);
      setError("Đăng ký thất bại!");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1600x900/?bridge')`,
      }}
    >
      <div className="bg-white shadow-lg rounded-lg w-96 p-8">
        <h2 className="text-center text-2xl font-bold text-gray-700 mb-6">ĐĂNG KÝ</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Họ và Tên" value={formData.name} onChange={handleChange} required className="w-full p-3 border rounded-md mb-2" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded-md mb-2" />
          <input type="text" name="phone" placeholder="Số điện thoại" value={formData.phone} onChange={handleChange} required className="w-full p-3 border rounded-md mb-2" />
          <input type="text" name="address" placeholder="Địa chỉ" value={formData.address} onChange={handleChange} required className="w-full p-3 border rounded-md mb-2" />
          <input type="password" name="password" placeholder="Mật khẩu" value={formData.password} onChange={handleChange} required className="w-full p-3 border rounded-md mb-2" />
          <input type="password" name="confirmPassword" placeholder="Nhập lại mật khẩu" value={formData.confirmPassword} onChange={handleChange} required className="w-full p-3 border rounded-md mb-2" />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
            Đăng Ký
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-500">
            Bạn đã có tài khoản?{" "}
            <Link to="/vn/login" className="text-blue-500 hover:underline">Đăng Nhập</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
