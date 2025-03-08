// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

const Profile = () => {
    return (
        <div className="relative group cursor-pointer">
            <div className="flex flex-col items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 ml-2 mr-2 transition-colors duration-200 ease-in-out hover:text-colorText"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                </svg>
                <div className="absolute w-full h-6 bg-transparent"></div>
            </div>

            <div
                className="absolute invisible group-hover:visible z-40 w-[230px] border-2 border-[#e7e7e7] 
                mt-6 h-auto -left-40 shadow-[3px_3px_3px_#dfdfdfd4] rounded-sm bg-white
                transition-all duration-200 ease-in-out transform origin-top
                group-hover:opacity-100 opacity-0"
            >
                <div className="flex flex-col h-full">
                    <div className="p-8 hover:bg-gray-50 cursor-pointer border-b border-[#e7e7e7] text-textGray text-lg">
                        Đăng nhập
                    </div>
                    <div className="p-8 hover:bg-gray-50 cursor-pointer text-textGray text-lg">
                        Đăng ký
                    </div>
                </div>
            </div>
            <div
                className="absolute invisible group-hover:visible z-40 w-0 h-0
                border-l-[14px] border-l-transparent
                border-r-[14px] border-r-transparent
                border-b-[18px] border-b-[#e7e7e7]
                top-[26px] transition-all duration-200 ease-in-out transform origin-top
                group-hover:opacity-100 opacity-0 left-1"
            ></div>
        </div>
    );
};

export default Profile;
