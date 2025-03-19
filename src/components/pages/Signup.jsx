import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
    alert("Sign up successful!");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1600x900/?bridge')`,
      }}
    >
      <div className="bg-white shadow-lg rounded-lg w-96 p-8">
        <h2 className="text-center text-2xl font-bold text-gray-700 mb-6">
          ĐĂNG KÝ
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Đăng Ký
          </button>
        </form>
        <div className="text-center my-4 text-gray-500">OR</div>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
            F
          </button>
          <button className="bg-blue-400 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
            T
          </button>
          <button className="bg-red-500 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
            G+
          </button>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-500">
            Bạn đã có tài khoản ?{" "}
            <Link to="/vn/login" className="text-blue-500 hover:underline">
              Đăng Nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
