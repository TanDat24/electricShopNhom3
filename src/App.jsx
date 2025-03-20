// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/header/Header";
import "./index.css";
import Footer from "./components/footer/Footer";
import Laptop from "./components/pages/Laptops";
import ParentWearable from "./components/pages/parentPages/ParentWearable";
import ParentTaplet from "./components/pages/parentPages/ParentTaplet";
import ParentAudio from "./components/pages/parentPages/ParentAudio";
import ParentHome from "./components/pages/parentPages/ParentHome";

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
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
