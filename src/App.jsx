import { useState, useEffect } from "react";
<<<<<<< HEAD
import { Route, Routes, Link, useNavigate } from "react-router-dom"; 
=======
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
>>>>>>> f1d5cb053aa52cce95bc525027c4747378020eb9
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
<<<<<<< HEAD
    const navigate = useNavigate();

=======
>>>>>>> f1d5cb053aa52cce95bc525027c4747378020eb9
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
<<<<<<< HEAD
        <div>
            <Header user={user} handleLogout={handleLogout} />
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
                <Route
                    path="/vn/:category/product-detail/:productId"
                    element={<ProductDetail />}
                />
            </Routes>
            <Footer />
        </div>
=======
        <Router>
            <div>
                <Header user={user} handleLogout={handleLogout}  onHeaderHeightChange={setHeaderHeight} />
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
>>>>>>> f1d5cb053aa52cce95bc525027c4747378020eb9
    );
}

export default App;
