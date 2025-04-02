// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { images } from "../../assets/image";

import NavItem from "../ui/NavItem";
import Search from "./Search";
import Cart from "./Cart";
import { CartProvider } from "../../contexts/CartContext";

// eslint-disable-next-line react/prop-types
const Header = ({ onHeaderHeightChange, user, handleLogout }) => {
<<<<<<< HEAD
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);
=======
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, []);
>>>>>>> f1d5cb053aa52cce95bc525027c4747378020eb9

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

<<<<<<< HEAD
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-30 transition-colors duration-300
=======
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const logoutAndRedirect = () => {
        handleLogout();
        navigate("/vn/login"); 
    };
    return (
        <>
            <header
                ref={headerRef}
                className={`fixed top-0 left-0 w-full z-30 transition-colors duration-300
>>>>>>> f1d5cb053aa52cce95bc525027c4747378020eb9
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
                  <img src={images.logoImg} alt="Logo" className="w-9 h-9" />
                  <h2 className="tracking-wider text-custom-gray font-bold text-xl text-colorText m-0 pl-2 text-3xl">
                    TalDat
                  </h2>
                </Link>
                <div>
                  <ul className="cursor-pointer flex m-0 space-x-7.5 text-base font-semibold text-colorText">
                    <Link to="/vn/wearables">
                      <NavItem>Thiết Bị Đeo</NavItem>
                    </Link>

<<<<<<< HEAD
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
=======
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
                                                className="text-lg font-semibold text-black-600 "
                                            >
                                                {/*  eslint-disable-next-line react/prop-types */}
                                                {user.name}
                                            </Link>
                                            <button
                                                onClick={logoutAndRedirect}
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
>>>>>>> f1d5cb053aa52cce95bc525027c4747378020eb9
                </div>
              </div>

              <div className="flex items-center justify-end">
                <Link to="/vn/category">
                  <NavItem className="mb-0 mr-4 font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                      />
                    </svg>
                  </NavItem>
                </Link>

                <div className="flex items-center pl-6 cursor-pointer">
                  <Link to={"/vn/checkout"}>
                    <NavItem className="mb-0 font-semibold">
                      <Cart />
                    </NavItem>
                  </Link>
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
