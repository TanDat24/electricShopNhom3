// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const NavItem = ({ children }) => {
    return (
        <li className="relative group pb-2 pt-2 list-none">
            {children}
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </li>
    );
};

export default NavItem;
