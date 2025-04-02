// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { images } from "../../assets/image";

import NavItem from "../ui/NavItem";
import Search from "./Search";
import Cart from "./Cart";

// eslint-disable-next-line react/prop-types
const Header = ({ onHeaderHeightChange = () => {}, user, handleLogout }) => {
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (headerRef.current) {
            const height = headerRef.current.offsetHeight;
            setHeaderHeight(height);
            onHeaderHeightChange(height);
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
<<<<<<< HEAD
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [onHeaderHeightChange]);

=======
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const logoutAndRedirect = () => {
        handleLogout();
        navigate("/vn/login"); 
    };
>>>>>>> f1d5cb053aa52cce95bc525027c4747378020eb9
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
                <div className="container mx-auto pt-2 pb-2">
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
                                <ul className="cursor-pointer flex m-0 space-x-7.5 text-base font-semibold text-colorText">
                                    <NavItem>
                                        <Link to="/vn/wearables">
                                            Thiết Bị Đeo
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/vn/laptops">
                                            Máy Tính Xách Tay
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/vn/tablets">
                                            Máy Tính Bảng
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/vn/audio">
                                            Tai Nghe và Loa
                                        </Link>
                                    </NavItem>
                                    <NavItem>Phụ Kiện</NavItem>
                                    <NavItem>EMUI</NavItem>
                                </ul>
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
                                                className="text-lg font-semibold text-black-600 "
                                            >
                                                {user.name}
                                            </Link>
                                            <button
<<<<<<< HEAD
                                                onClick={handleLogout}
                                                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition duration-200"
=======
                                                onClick={logoutAndRedirect}
                                                className="bg-red-500 text-white px-3 py-1 rounded"
>>>>>>> f1d5cb053aa52cce95bc525027c4747378020eb9
                                            >
                                                Đăng xuất
                                            </button>
                                        </div>
                                    ) : (
                                        <Link
                                            to="/vn/login"
                                            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition duration-200"
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
