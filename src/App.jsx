import { useState, useEffect, useMemo } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import UserProfile from "./components/pages/UserProfile";
import Footer from "./components/footer/Footer";
import Laptop from "./components/pages/Laptops";
import ParentWearable from "./components/pages/parentPages/ParentWearable";
import ParentTaplet from "./components/pages/parentPages/ParentTaplet";
import ParentAudio from "./components/pages/parentPages/ParentAudio";
import ParentHome from "./components/pages/parentPages/ParentHome";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ParentCategory from "./components/pages/parentPages/ParentCategory";
import "./index.css";
import ParentCart from "./components/pages/parentPages/ParentCart";
import Breadcrumb from "./helpers/Breadcrumb";
function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [user, setUser] = useState(null);

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
    
};

  return (
    <Router>
      <div>
      <Header user={user} handleLogout={handleLogout} onHeaderHeightChange={setHeaderHeight} />
        <Routes>
          <Route path="/" element={<Navigate to="/vn" replace />} />

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

          <Route path="/vn/login" element={<Login setUser={setUser} />} />
          <Route path="/vn/signup" element={<Signup />} />
          <Route
            path="/vn/profile"
            element={<UserProfile user={user} onLogout={handleLogout} />}
          />

          <Route path="/vn/:category" element={<ParentCategory />} />
          <Route
            path="/vn/:category/product-detail/:productId"
            element={<ProductDetail />}
          />
          <Route path="/vn/checkout" element={<ParentCart />} />
        </Routes>
        <Breadcrumb />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
