// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function OutstandProd({ image, title }) {
    return (
        <a href="#" className="mr-[20px] ml-[20px]">
            <div className="row-span-1 col-span-1 bg-OutPro rounded-[20px] flex items-center justify-center p-[32px]">
                <img
                    src={image}
                    alt={title}
                    className="transition-transform duration-700 ease-in-out transform hover:scale-125 max-w-[55%] max-h-[70%]"
                ></img>
            </div>
            <a
                href="#"
                className="block pt-4 font-medium hover:underline text-[18px] "
            >
                {title}
            </a>
        </a>
    );
}
export default OutstandProd;
