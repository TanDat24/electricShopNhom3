import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets/image";
import NavItem from "../ui/NavItem";
import Search from "./Search";

const Header = ({ user, handleLogout }) => {
    const headerRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 left-0 w-full z-30 transition-colors duration-300
                    ${isScrolled ? "bg-white border-b border-borderColor" : "bg-header"}
                `}
        >
            <div className="container mx-auto pt-2 pb-2">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/vn" className="flex items-center pr-10 cursor-pointer no-underline">
                            <img src={images.logoImg} alt="Logo" className="w-9 h-9" />
                            <h2 className="tracking-wider text-custom-gray font-bold text-xl text-colorText m-0 pl-2 text-3xl">
                                TalDat
                            </h2>
                        </Link>
                        {/* Menu */}
                        <ul className="flex space-x-7.5 text-base font-semibold text-colorText">
                            <Link to="/vn/wearables"><NavItem>Máy Tính Xách Tay</NavItem></Link>
                            <Link to="/vn/thietbideo"><NavItem>Thiết Bị Đeo</NavItem></Link>
                            <Link to="/vn/maytinhban"><NavItem>Máy Tính Bảng</NavItem></Link>
                            <NavItem>Tai Nghe và Loa</NavItem>
                            <NavItem>Phụ Kiện</NavItem>
                            <NavItem>EMUI</NavItem>
                        </ul>
                    </div>

                    {/* Search + Profile */}
                    <div className="flex items-center">
                        <NavItem className="mr-10 font-medium">Hỗ trợ</NavItem>
                        <Search />

                        {/* Kiểm tra user */}
                        {user ? (
                            <div className="flex items-center space-x-4">
                                <Link to="/vn/profile" className="text-lg font-semibold text-blue-600 hover:underline">
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
                            <Link to="/vn/login" className="bg-blue-500 text-white px-4 py-1 rounded">
                                Đăng nhập
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
