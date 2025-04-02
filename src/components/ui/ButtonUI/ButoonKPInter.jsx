import { useState } from "react";
import ParentComponent from "../../model/ParentComponent ";
import { useNavigate } from "react-router-dom";

const ButtonKPInter = ({
    title,
    productId,
    category,
    icon = false,
    audio = false,
    watch = false,
    tablet = false,
}) => {
    const [showModal, setShowModal] = useState(null);
    const navigate = useNavigate();

    const handleClick = () => {
        if (audio) {
            setShowModal("audio");
        } else if (watch) {
            setShowModal("watch");
        } else if (tablet) {
            setShowModal("tablet");
        }
    };

    const handleButtonClick = () => {
        const path = `/vn/${category}/product-detail/${productId}`;
        navigate(path);
    };

    const combinedHandleClick = () => {
        if (icon) {
            handleClick();
        } else {
            handleButtonClick();
        }
    };

    return (
        <>
            <button
                onClick={combinedHandleClick}
                className="text-[14px] mx-3 my-2 p-[14px] w-2/3 bg-colorText text-white font-bold rounded-lg hover:bg-darkBlue flex items-center justify-center gap-2 group"
            >
                {title}
                {icon && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 transition-transform duration-300 group-hover:rotate-90"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                )}
            </button>

            {showModal && (
                <ParentComponent
                    type={showModal}
                    onClose={() => setShowModal(null)}
                />
            )}
        </>
    );
};

export default ButtonKPInter;
