import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, , useNavigate } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import UserProfile from "./components/pages/UserProfile";
import "./index.css";
import Footer from "./components/footer/Footer";
import Laptop from "./components/pages/Laptops";
import ParentWearable from "./components/pages/parentPages/ParentWearable";
import ParentTaplet from "./components/pages/parentPages/ParentTaplet";
import ParentAudio from "./components/pages/parentPages/ParentAudio";
import ParentHome from "./components/pages/parentPages/ParentHome";
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App() {
    const [headerHeight, setHeaderHeight] = useState(0);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.error("Lỗi khi lấy user từ localStorage:", error);
        }
    }, []);

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/vn"); // ✅ Điều hướng đúng
    };

    return (
        <Router>
            <div>
                <Header onHeaderHeightChange={setHeaderHeight} />
                <nav>
                    <Link to="/vn"></Link>
                    <Link to="/vn/wearables"></Link>
                    <Link to="/vn/laptops"></Link>
                    <Link to="/vn/tablets"></Link>
                    <Link to="/vn/audio"></Link>
                </nav>
                <Routes>
                    <Route
                        path="/vn"
                        element={<ParentHome headerHeight={headerHeight} />}
                    />
                    <Route
                        path="/vn/wearables"
                        element={<ParentWearable headerHeight={headerHeight} />}
                    />
                    <Route
                        path="/vn/laptops"
                        element={<Laptop headerHeight={headerHeight} />}
                    />
                    <Route
                        path="/vn/tablets"
                        element={<ParentTaplet headerHeight={headerHeight} />}
                    />
                    <Route
                        path="/vn/audio"
                        element={<ParentAudio headerHeight={headerHeight} />}
                    />
                    <Route
                        path="/vn/login"
                        element={<Login setUser={setUser} />}
                    />
                    <Route path="/vn/signup" element={<Signup />} />
                    <Route
                        path="/vn/profile"
                        element={<UserProfile user={user} />}
                    />
                    {/* Route cho từng loại sản phẩm */}
                    <Route
                        path="/vn/:category/product-detail/:productId"
                        element={<ProductDetail />}
                    />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
