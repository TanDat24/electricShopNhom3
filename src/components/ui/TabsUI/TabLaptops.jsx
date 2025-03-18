import BannerItem from "../../pages/layout/BannerItem";
import ButtonKPBasic from "../ButtonUI/ButtonKPBasic";
import ButtonMNBasic from "../ButtonUI/ButtonMNBasic";
import { images } from "../../../assets/image";
import ContentCart from "../../pages/layout/ContentCart";
import CartComputer from "../CartUI/CartComputer";
import CartItemWatch from "../CartUI/CartItemWatch";
import ButtonUI from "../ButtonUI/ButtonUI";
import SlideCartLaptop from "../SlideUI/SlideCartLaptop";
const TabLaptops = () => {
    return (
        <div className="bg-background">
            <div className="h-3/5">
                <BannerItem
                    title={"MateBook D 14"}
                    buttonkp={<ButtonKPBasic title="Khám Phá" />}
                    buttonmn={<ButtonMNBasic />}
                    image={images.matebookD}
                />
            </div>
            <div>
                <div>
                    <ContentCart
                        id="watch-ultimate"
                        title="MateBook D Series"
                        des="Kiệt Tác Đỉnh Cao"
                        name="TalDat WATCH Ultimate"
                    />
                </div>
            </div>
            <div className="container mx-auto m-6 rounded-xl bg-white p-4 h-[340px]">
                <CartComputer des="Tai nghe và đồng hồ - Hai trong Một Chống ồn cuộc gọi AI" />
            </div>
            <div className="grid grid-cols-2 gap-6 container mx-auto">
                <CartItemWatch
                    title="Thế Giới Phụ Kiện"
                    des="Đa Dạng Lựa Chọn, Phù Hợp Mọi Phong Cách"
                    images={images.coGaiDH}
                    bgColor="#cad3d6"
                />
                <CartItemWatch
                    title="Ghép Nối Điện Thoại TalDat"
                    des="Hiệu Suất Tối Ưu, Cuộc Sống Tiện Nghi"
                    images={images.dayDH2}
                    bgColor="white"
                />
            </div>
            <div>
                <h1 className="text-[3rem] flex align-center justify-center pt-8 pb-6 font-semibold">
                    TALDAT Smart Office
                </h1>
                <div
                    className="container mx-auto h-[500px] bg-cover object-cover rounded-xl"
                    style={{ backgroundImage: `url(${images.card5})` }}
                >
                    <h1 className=" text-white pl-[84px] pt-[62px] text-[44px] pb-8 font-medium">
                        Siêu Thiết Bị, Siêu Sáng Tạo
                    </h1>
                    <ButtonUI
                        title="Khám Phá"
                        buttonColor="text-white pl-[84px] hover:text-white"
                        svgColor="text-white"
                    />
                </div>
            </div>
            <div>
                <SlideCartLaptop />
            </div>
        </div>
    );
};
export default TabLaptops;
