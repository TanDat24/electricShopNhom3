// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import Wearables from "./components/pages/Wearables";
import "./index.css";
import Footer from "./components/footer/Footer";
import ThietBiDeo from "./components/pages/Laptops";
import MayTinhBan from "./components/pages/MayTinhBan";
import Audio from "./components/pages/audio";

function App() {
    const [headerHeight, setHeaderHeight] = useState(0);

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
                        element={<Home headerHeight={headerHeight} />}
                    />
                    <Route
                        path="/vn/wearables"
                        element={<Wearables headerHeight={headerHeight} />}
                    />
                    <Route
                        path="/vn/laptops"
                        element={<ThietBiDeo headerHeight={headerHeight} />}
                    />
                    <Route
                        path="/vn/tablets"
                        element={<MayTinhBan headerHeight={headerHeight} />}
                    />
                    <Route
                        path="/vn/audio"
                        element={<Audio headerHeight={headerHeight} />}
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
