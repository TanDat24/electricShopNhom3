import { useState } from "react";
import ModelButtonMN from "../../model/ModelButtonMN";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ButtonUI = ({
    title,
    type,
    className,
    buttonColor = "text-black",
    svgColor = "text-black",
    category, // Nhận category động từ props
    productId = "default-id",
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleNavigate = () => {
        if (type === "muangay") {
            handleOpenModal(); // Nếu là "muangay" thì mở modal
        } else if (category) {
            // Nếu có category, điều hướng đến trang chi tiết sản phẩm
            navigate(`/vn/${category}/product-detail/${productId}`);
        } else {
            console.error("Category is required for navigation!");
        }
    };

    return (
        <div className={`flex items-center group ${className}`}>
            <button
                onClick={handleNavigate}
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
            {type === "muangay" && (
                <ModelButtonMN
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default ButtonUI;
