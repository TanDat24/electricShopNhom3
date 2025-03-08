// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import Wearables from "./components/pages/Wearables";
import "./index.css";
import Footer from "./components/footer/Footer";
import ThietBiDeo from "./components/pages/ThietBiDeo copy";
import MayTinhBan from "./components/pages/MayTinhBan";

function App() {
    const [headerHeight, setHeaderHeight] = useState(0);

    return (
        <Router>
            <div>
                <Header onHeaderHeightChange={setHeaderHeight} />
                <nav>
                    <Link to="/vn"></Link>
                    <Link to="/vn/wearables"></Link>
                    <Link to="/vn/thietbideo"></Link>
                    <Link to="/vn/maytinhban"></Link>
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
                        path="/vn/thietbideo"
                        element={<ThietBiDeo headerHeight={headerHeight} />}
                    />
                    <Route
                        path="/vn/maytinhban"
                        element={<MayTinhBan headerHeight={headerHeight} />}
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
