// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets/image";

import NavItem from "../ui/NavItem";
import Search from "./Search";
import Cart from "./Cart";

// eslint-disable-next-line react/prop-types
const Header = ({ onHeaderHeightChange, user, handleLogout }) => {
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, []);

    useEffect(() => {
        if (headerRef.current) {
            onHeaderHeightChange(headerRef.current.offsetHeight);
        }
    }, [onHeaderHeightChange]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <header
                ref={headerRef}
                className={`fixed top-0 left-0 w-full z-30 transition-colors duration-300
                    ${
                        isScrolled
                            ? "bg-white border-b border-borderColor"
                            : "bg-header"
                    }`}
            >
                <div className="container mx-auto pt-2 pb-2 ">
                    <div className="justify-content-md-center">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Link
                                    to="/vn"
                                    className="flex items-center pr-10 cursor-pointer no-underline"
                                >
                                    <img
                                        src={images.logoImg}
                                        alt="Logo"
                                        className="w-9 h-9"
                                    />
                                    <h2 className="tracking-wider text-custom-gray font-bold text-xl text-colorText m-0 pl-2 text-3xl">
                                        TalDat
                                    </h2>
                                </Link>
                                <div>
                                    <ul className="cursor-pointer flex m-0 space-x-7.5 text-base font-semibold text-colorText">
                                        <Link to="/vn/wearables">
                                            <NavItem>Thiết Bị Đeo</NavItem>
                                        </Link>

                                        <Link to="/vn/laptops">
                                            <NavItem>Máy Tính Xách Tay</NavItem>
                                        </Link>
                                        <Link to="/vn/tablets">
                                            <NavItem>Máy Tính Bảng</NavItem>
                                        </Link>
                                        <Link to="/vn/audio">
                                            <NavItem>Tai Nghe và Loa</NavItem>
                                        </Link>
                                        <NavItem>Phụ Kiện</NavItem>
                                        <NavItem>EMUI</NavItem>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex items-center justify-end">
                                <NavItem className="mb-0 mr-10 font-medium">
                                    Hỗ trợ
                                </NavItem>
                                <div className="flex items-center pl-10 cursor-pointer">
                                    <Cart />
                                    <Search headerHeight={headerHeight} />
                                    {user ? (
                                        <div className="flex items-center space-x-4">
                                            <Link
                                                to="/vn/profile"
                                                className="text-lg font-semibold text-blue-600 hover:underline"
                                            >
                                                {/*  eslint-disable-next-line react/prop-types */}
                                                {user.name}
                                            </Link>
                                            <button
                                                onClick={handleLogout}
                                                className="bg-red-500 text-white px-3 py-1 rounded"
                                            >
                                                Đăng xuất
                                            </button>
                                        </div>
                                    ) : (
                                        <Link
                                            to="/vn/login"
                                            className="bg-blue-500 text-white px-4 py-1 rounded"
                                        >
                                            Đăng nhập
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
