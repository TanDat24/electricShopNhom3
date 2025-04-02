import { useState } from "react";
import ModelButtonMN from "../../model/ModelButtonMN";

const ButtonMNBasic = () => {
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
                className="text-[13px] mx-3 my-2 pt-[6px] pb-[6px] px-[16px] border border-textGray rounded-lg hover:border-darkBlue"
            >
                Mua ngay
            </button>

            <ModelButtonMN isOpen={isModalOpen} onClose={handleCloseModal} />
        </>
    );
};

export default ButtonMNBasic;
