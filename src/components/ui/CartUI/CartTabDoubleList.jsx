import { images } from "../../../assets/image";

// eslint-disable-next-line react/prop-types
const CartTabDoubleList = ({ titleStyle, title, desStyle, des, image }) => {
    return (
        <div className="flex flex-col bg-background w-full h-full">
            {/* Hàng đầu tiên */}
            <div className="bg-white h-1/2">
                <div>
                    <div className="left-12 z-10">
                        <div className="flex pt-10">
                            <img
                                src={images.appgallery}
                                className="w-12 mr-2"
                            />
                            <h2
                                className={`text-[24px] flex items-center ${titleStyle}`}
                            >
                                Tìm Kiếm AI
                            </h2>
                        </div>
                        <p className={`pt-6 text-[22px] ${desStyle}`}>
                            Nhận tệp trên điện thoại di động và máy tính bảng
                            khi được kết nối ở một nơi.
                        </p>
                    </div>
                    <img src={images.mobileservices} className="rounded-2xl" />
                </div>
            </div>

            {/* Hàng thứ hai */}
            <div className="bg-white h-1/2">
                <div>
                    <div className="left-12 z-10">
                        <div className="flex pt-10">
                            <img
                                src={images.appgallery}
                                className="w-12 mr-2"
                            />
                            <h2
                                className={`text-[24px] flex items-center ${titleStyle}`}
                            >
                                Tìm Kiếm AI
                            </h2>
                        </div>
                        <p className={`pt-6 text-[22px] ${desStyle}`}>
                            Nhận tệp trên điện thoại di động và máy tính bảng
                            khi được kết nối ở một nơi.
                        </p>
                    </div>
                    <img src={images.mobileservices} className="rounded-2xl" />
                </div>
            </div>
        </div>
    );
};

export default CartTabDoubleList;
