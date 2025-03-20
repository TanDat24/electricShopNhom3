import { useState } from "react";
import ParentComponent from "../../model/ParentComponent ";

const ButtonKPInter = ({
    // eslint-disable-next-line react/prop-types
    title, // eslint-disable-next-line react/prop-types
    icon = false, // eslint-disable-next-line react/prop-types
    audio = false, // eslint-disable-next-line react/prop-types
    watch = false, // eslint-disable-next-line react/prop-types
    tablet = false, // eslint-disable-next-line react/prop-types
    link = "/",
}) => {
    const [showModal, setShowModal] = useState(null);

    const handleClick = () => {
        if (audio) {
            setShowModal("audio");
        } else if (watch) {
            setShowModal("watch");
        } else if (tablet) {
            setShowModal("tablet");
        } else {
            window.location.href = link;
        }
    };

    return (
        <>
            <button
                onClick={handleClick}
                className="text-[14px] mx-3 my-2 p-[14px] w-1/2 bg-colorText text-white font-bold rounded-lg hover:bg-darkBlue flex items-center justify-center gap-2 group"
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
