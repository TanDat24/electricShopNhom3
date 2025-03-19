import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userData from "../../assets/Data/data.json"; // Đúng đường dẫn

const Login = ({ setUser }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Tìm kiếm user phù hợp
        const user = userData.find((u) => u.email === email && u.password === password);

        if (user) {
            setUser(user);
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/vn");
        } else {
            alert("Sai tài khoản hoặc mật khẩu!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url('https://source.unsplash.com/1600x900/?bridge')` }}
        >
            <div className="bg-white shadow-lg rounded-lg w-96 p-8">
                <h2 className="text-center text-2xl font-bold text-gray-700 mb-6">ĐĂNG NHẬP</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <button type="submit"
                        className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
                    >
                        Đăng nhập
                    </button>
                </form>
                <div className="text-center my-4 text-gray-500">HOẶC</div>
                <div className="flex justify-center space-x-4">
                    <button className="bg-blue-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                        <a href="https://www.facebook.com/">F</a>
                    </button>
                    <button className="bg-black text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                        <a href="https://x.com/">X</a>
                    </button>
                    <button className="bg-red-500 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center">
                        <a href="https://mail.google.com/mail">G+</a>
                    </button>
                </div>
                <div className="text-center mt-4">
                    <p className="text-gray-500">
                        Chưa có tài khoản?{" "}
                        <Link to="/vn/signup" className="text-blue-500 hover:underline">
                            Đăng ký ngay
                        </Link>
                    </p>
                    <p>
                        <a href="#" className="text-blue-500 hover:underline">
                            Quên mật khẩu?
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
