import { useState, useEffect } from "react";
import { images } from "../../assets/image";
import { createPortal } from "react-dom";
import ListShopUI from "../ui/ListShopUI";
// eslint-disable-next-line react/prop-types
const ModelButtonMN = ({ isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            setIsClosing(false);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 300);
    };

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
                className={`bg-white w-[750px] h-[664px] rounded-lg relative 
                transform transition-transform duration-300 ease-out
                ${isClosing ? "animate-slideUp" : "animate-slideDown"}`}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-4 text-[26px] mr-[8px] right-4 text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>
                <div className="p-6">
                    <div className="font-inherit flex justify-center text-[36px] items-center text-center pt-[34px] pb-[30px]">
                        SẢN PHẨM TALDAT BẠN TÌM KIẾM ĐANG CÓ HÀNG TẠI:
                    </div>
                    <ul className="grid grid-cols-3 gap-4 max-h-[344px] mb-6 overflow-y-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300">
                        <ListShopUI image={images.theGioiDiDong} />
                        <ListShopUI image={images.cellphone} />
                        <ListShopUI image={images.hoangGia} />
                        <ListShopUI image={images.fpt} />
                        <ListShopUI image={images.diDongViet} />
                        <ListShopUI image={images.shopee} />
                        <ListShopUI image={images.lazada} />
                        <ListShopUI image={images.tiktok} />
                    </ul>
                    <div className="font-inherit pr-4 mt-6 max-h-[64px] overflow-y-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300">
                        Khi nhấp chọn các cửa hàng trên, bạn sẽ được chuyển đến
                        trang bán hàng của bên thứ ba. Xin vui lòng đảm bảo bạn
                        đã kiểm tra các điều khoản tương ứng của chính sách mua
                        hàng và quyền riêng tư khách hàng. Huawei sẽ không chịu
                        trách nhiệm và không kiểm soát nội dung trên trang Web
                        của bên thứ ba.
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ModelButtonMN;
