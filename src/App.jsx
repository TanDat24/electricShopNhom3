import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import Wearables from "./components/pages/Wearables";
import ThietBiDeo from "./components/pages/ThietBiDeo";
import MayTinhBan from "./components/pages/MayTinhBan";
import Footer from "./components/footer/Footer";
import "./index.css";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import UserProfile from "./components/pages/UserProfile";
function App() {
    const [user, setUser] = useState(null);

    // Lấy user từ localStorage khi tải lại trang
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Xử lý đăng xuất
    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <Router>
            <div>
                {/* Truyền user và handleLogout xuống Header */}
                <Header user={user} handleLogout={handleLogout} />
                <Routes>
                    <Route path="/vn" element={<Home />} />
                    <Route path="/vn/wearables" element={<Wearables />} />
                    <Route path="/vn/thietbideo" element={<ThietBiDeo />} />
                    <Route path="/vn/maytinhban" element={<MayTinhBan />} />
                    <Route path="/vn/login" element={<Login setUser={setUser} />} />
                    <Route path="/vn/signup" element={<Signup />} />
                    <Route path="/vn/profile" element={<UserProfile user={user} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
