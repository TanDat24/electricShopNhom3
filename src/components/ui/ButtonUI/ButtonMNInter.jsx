import { useState } from "react";
import ModelButtonMN from "../../model/ModelButtonMN";
const ButtonMNInter = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <button
                onClick={handleOpenModal}
                className="text-[13px] mx-3 my-2 p-[14px] w-1/2 border border-textGray rounded-lg hover:border-darkBlue"
            >
                Mua ngay
            </button>

            <ModelButtonMN isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
    );
};
export default ButtonMNInter;
