import { useState } from "react";
import ModelButtonMN from "../../model/ModelButtonMN";

const ButtonUI = ({
    // eslint-disable-next-line react/prop-types
    title,
    // eslint-disable-next-line react/prop-types
    type,
    // eslint-disable-next-line react/prop-types
    className,
    // eslint-disable-next-line react/prop-types
    buttonColor = "text-black",
    // eslint-disable-next-line react/prop-types
    svgColor = "text-black",
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={`flex items-center group ${className}`}>
            <button
                onClick={handleOpenModal}
                className={`font-[600] hover:text-colorText text-[15px] ${buttonColor}`}
            >
                {title}
            </button>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className={`size-5 pt-[3px] transition-transform duration-300 group-hover:translate-x-1 ${svgColor}`}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
                />
            </svg>
            {type === "muangay" ? (
                <ModelButtonMN
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            ) : (
                <span></span>
            )}
        </div>
    );
};

export default ButtonUI;
