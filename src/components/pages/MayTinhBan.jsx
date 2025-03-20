import ButtonKPBasic from "../ui/ButtonUI/ButtonKPBasic";
import ButtonMNBasic from "../ui/ButtonUI/ButtonMNBasic";
import BannerItem from "./layout/BannerItem";
import { images } from "../../assets/image";
import CartItem from "./layout/CartItem";
import ContentCart from "./layout/ContentCart";
import CartComputer from "../ui/CartUI/CartComputer";
import InforItme from "../ui/InforItme";
import ListCart from "../ui/CartUI/ListCart";
import ButtonKPInter from "../ui/ButtonUI/ButoonKPInter";
import CartItemWatch from "../ui/CartUI/CartItemWatch";
import SlideCartLaptop from "../ui/SlideUI/SlideCartLaptop";
import Note from "./layout/Note";
import { useProducts } from "../../../api/WearablesAPI";

const MayTinhBan = () => {
    const { tablets } = useProducts();
    return (
        <div className="pt-[3rem] bg-background">
            {tablets[1] && (
                <BannerItem
                    title={tablets[1].title}
                    describe={tablets[1].des}
                    buttonkp={<ButtonKPBasic title="Khám Phá" />}
                    buttonmn={<ButtonMNBasic />}
                    image={tablets[1].images.anh1}
                />
            )}
            <div className="container mx-auto">
                <h1 className="text-[50px] pt-[80px] pb-12 flex align-center justify-center font-semibold">
                    MatePad Nào Phù Hợp Cho Bạn?
                </h1>
                <div className="grid grid-cols-5 gap-4">
                    <div></div>
                    {tablets[2] && (
                        <CartItem
                            id="watch-ultimate"
                            title={tablets[2].title}
                            des={tablets[2].des}
                            images={tablets[2].images.anh1}
                        />
                    )}
                    {tablets[3] && (
                        <CartItem
                            id="watch-ultimate"
                            title={tablets[3].title}
                            des={tablets[3].des}
                            images={tablets[3].images.anh1}
                        />
                    )}
                    {tablets[4] && (
                        <CartItem
                            id="watch-ultimate"
                            title={tablets[4].title}
                            des={tablets[4].des}
                            images={tablets[4].images.anh1}
                        />
                    )}
                </div>
            </div>
            <div>
                <div>
                    {tablets[2] && (
                        <ContentCart
                            id="watch-ultimate"
                            title={tablets[2].title}
                            des={tablets[2].des}
                            name={tablets[2].name}
                            image={Object.values(tablets[2].images)}
                        />
                    )}
                </div>
            </div>
            <div>
                <div>
                    {tablets[3] && (
                        <ContentCart
                            id="watch-ultimate"
                            title={tablets[3].title}
                            des={tablets[3].des}
                            name={tablets[3].name}
                            image={Object.values(tablets[3].images)}
                        />
                    )}
                </div>
            </div>
            <div className="container mx-auto pb-12 pt-4">
                <div className="grid grid-cols-2 gap-4 h-[340px]">
                    <div className="bg-white p-4 rounded-lg">
                        {tablets[4] && (
                            <CartComputer
                                des={tablets[4].des}
                                image={tablets[4].images.anh1}
                            />
                        )}
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        {tablets[5] && (
                            <CartComputer
                                des={tablets[5].des}
                                image={tablets[5].images.anh1}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div>
                <div>
                    {tablets[6] && (
                        <ContentCart
                            id="watch-ultimate"
                            title={tablets[6].title}
                            des={tablets[6].des}
                            name={tablets[6].name}
                            image={Object.values(tablets[6].images)}
                        />
                    )}
                </div>
            </div>
            <div>
                <div>
                    {tablets[7] && (
                        <ContentCart
                            id="watch-ultimate"
                            title={tablets[7].title}
                            des={tablets[7].des}
                            name={tablets[7].name}
                            image={Object.values(tablets[7].images)}
                        />
                    )}
                </div>
            </div>
            <div>
                <div className="text-[50px] pt-[80px] flex align-center justify-center font-semibold">
                    Chọn Máy Tính Bảng Huawei
                </div>
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 w-full bg-white rounded-2xl">
                        {/* Cột bên trái */}
                        <InforItme image={images.huaweiMatepad} />

                        {/* Cột bên phải */}
                        <InforItme image={images.tapletImg} />
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <h1 className="text-[50px] pt-[80px] pb-12 flex align-center justify-center font-semibold ">
                    Tất Cả Thiết Bị Đeo Và Phụ Kiện
                </h1>
                <div className="grid grid-cols-4 gap-4 pb-6 h-[460px] pb-12">
                    <div className="bg-white p-4 rounded-lg">
                        {tablets[8] && (
                            <ListCart
                                images={tablets[8].images.anh1}
                                name={tablets[8].name}
                            />
                        )}
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        {tablets[9] && (
                            <ListCart
                                images={tablets[9].images.anh1}
                                name={tablets[9].name}
                            />
                        )}
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        {tablets[10] && (
                            <ListCart
                                images={tablets[10].images.anh1}
                                name={tablets[10].name}
                            />
                        )}
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        {tablets[11] && (
                            <ListCart
                                images={tablets[11].images.anh1}
                                name={tablets[11].name}
                            />
                        )}
                    </div>
                </div>
                <div className="w-full flex align-center justify-center">
                    <div className="flex align-center justify-center w-1/5 ">
                        <ButtonKPInter
                            title="Xem Tất Cả"
                            icon={true}
                            tablet={true}
                        />
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <h1 className="text-[50px] pt-[80px] pb-12 flex align-center justify-center font-semibold ">
                    Điểm Nổi Bật Của HUAWEI MatePad
                </h1>
                <div className="grid grid-cols-2 gap-6">
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
            </div>
            <div className="container mx-auto">
                <SlideCartLaptop />
            </div>
            <div>
                <Note page="Máy Tính Bảng" />
            </div>
        </div>
    );
};
export default MayTinhBan;
