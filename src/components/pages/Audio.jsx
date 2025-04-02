import ButtonKPBasic from "../ui/ButtonUI/ButtonKPBasic";
import ButtonMNBasic from "../ui/ButtonUI/ButtonMNBasic";
import BannerItem from "./layout/BannerItem";
import { images } from "../../assets/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CartItem from "./layout/CartItem";
import ContentCart from "./layout/ContentCart";
import CartComputer from "../ui/CartUI/CartComputer";
import InforItme from "../ui/InforItme";
import ButtonKPInter from "../ui/ButtonUI/ButoonKPInter";
import ListCart from "../ui/CartUI/ListCart";
import CartItemWatch from "../ui/CartUI/CartItemWatch";
import SlideCartLaptop from "../ui/SlideUI/SlideCartLaptop";
import Note from "./layout/Note";
import { useProducts } from "../../../api/WearablesAPI";

const Audio = () => {
    const { audios } = useProducts();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    };
    return (
        <div className="pt-[3rem] bg-background">
            {audios[4] && (
                <BannerItem
                    title={audios[4].title}
                    describe={audios[4].des}
                    buttonkp={<ButtonKPBasic title="Khám Phá" />}
                    buttonmn={<ButtonMNBasic />}
                    image={audios[4].images.anh1} // Lấy ảnh đầu tiên
                />
            )}
            <div>
                <p className="text-[3rem] flex align-center justify-center pt-8 pb-6 font-semibold">
                    Trải Nghiệm Công Nghệ Âm Thanh Tiên Tiến
                </p>
                <div className="h-[900px]">
                    <div className="relative w-full h-[500px] bg-white rounded-2xl">
                        <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
                            <button
                                onClick={handlePrev}
                                className="bg-gray-200 p-2 rounded-full ml-[24rem] mt-[17rem]"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={handleNext}
                                className="bg-gray-200 p-2 rounded-full mr-[24rem] mt-[17rem]"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>

                        <div
                            className="flex transition-transform duration-500 h-[800px]"
                            style={{
                                transform: `translateX(-${
                                    currentIndex * 100
                                }%)`,
                            }}
                        >
                            {[...Array(3)].map((_, index) => (
                                <div
                                    key={index}
                                    className="w-full flex-shrink-0 flex items-center justify-center"
                                >
                                    <div className="w-full h-full bg-white flex flex-col items-center justify-center p-6">
                                        <img
                                            src={images.freebudsPro4from}
                                            className="w-3/5 h-auto"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <h1 className="text-[50px]  pb-12 flex align-center justify-center font-semibold">
                    Dòng Sản Phẩm Tốt Nhất Cho Bạn
                </h1>
                <div className="grid grid-cols-5 gap-4">
                    <CartItem
                        id="watch-ultimate"
                        title="WATCH Ultimate"
                        des="Kiệt Tác Đỉnh Cao"
                        images={images.watchUltimate}
                    />
                    <CartItem
                        id="watch-series"
                        title="WATCH Series"
                        des="Công Nghệ Tiên Tiến"
                        images={images.watchSeriesNew}
                    />
                    <CartItem
                        id="watch-gt-series"
                        title="WATCH GT Series"
                        des="Cổ Điển Năng Động"
                        images={images.watchWt5ProNav}
                    />
                    <CartItem
                        id="watch-fit-series"
                        title="WATCH FIT Series"
                        des="Thời Trang Xu Hướng"
                        images={images.watchFit3Nav}
                    />
                    <CartItem
                        id="healthKids-watch"
                        title="Health & Kids "
                        des="Sức Khỏe Và Gia Đình"
                        images={images.watchD2Nav}
                    />
                </div>
            </div>
            <div>
                <div>
                    {audios[2] && (
                        <ContentCart
                            id="watch-ultimate"
                            title={audios[2].title}
                            des={audios[2].des}
                            name={audios[2].name}
                            image={Object.values(audios[2].images)}
                        />
                    )}
                </div>
            </div>
            <div className="container mx-auto pb-12 pt-4">
                <div className="grid grid-cols-2 gap-4 h-[340px]">
                    <div className="bg-white p-4 rounded-lg">
                        {audios[3] && (
                            <CartComputer
                                des={audios[3].des}
                                image={audios[3].images.anh1}
                            />
                        )}
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        {audios[4] && (
                            <CartComputer
                                des={audios[4].des}
                                image={audios[4].images.anh1}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div>
                <div>
                    {audios[5] && (
                        <ContentCart
                            id="watch-series"
                            title={audios[5].title}
                            des={audios[5].des}
                            name={audios[5].name}
                            image={Object.values(audios[5].images)}
                        />
                    )}
                </div>
            </div>
            <div className="container mx-auto m-6 rounded-xl bg-white p-4 h-[340px]">
                {audios[6] && (
                    <CartComputer
                        des={audios[6].des}
                        image={audios[6].images.anh1}
                    />
                )}
            </div>
            <div>
                <div>
                    {audios[7] && (
                        <ContentCart
                            id="watch-gt-series"
                            title={audios[7].title}
                            des={audios[7].des}
                            name={audios[7].name}
                            image={Object.values(audios[7].images)}
                        />
                    )}
                </div>
            </div>
            <div>
                <div>
                    {audios[8] && (
                        <ContentCart
                            id="watch-fit-series"
                            title={audios[8].title}
                            des={audios[8].des}
                            name={audios[8].name}
                            image={Object.values(audios[8].images)}
                        />
                    )}
                </div>
            </div>
            <div className="container mx-auto pb-12 pt-4">
                <div className="grid grid-cols-2 gap-4 h-[340px]">
                    <div className="bg-white p-4 rounded-lg">
                        {audios[9] && (
                            <CartComputer
                                des={audios[9].des}
                                image={audios[9].images.anh1}
                            />
                        )}
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        {audios[10] && (
                            <CartComputer
                                des={audios[10].des}
                                image={audios[10].images.anh1}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div>
                <div>
                    {audios[11] && (
                        <ContentCart
                            id="healthKids-watch"
                            title={audios[11].title}
                            des={audios[11].des}
                            name={audios[11].name}
                            image={Object.values(audios[11].images)}
                        />
                    )}
                </div>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-3 w-full bg-white rounded-2xl">
                    {/* Cột bên trái */}
                    <InforItme image={images.huaweiMatepad} />

                    {/* Cột bên phải */}
                    <InforItme image={images.tapletImg} />

                    <InforItme image={images.huaweiMatepad} />
                </div>
            </div>
            <div className="container mx-auto">
                <h1 className="text-[50px] pt-[80px] pb-12 flex align-center justify-center font-semibold ">
                    Tất Cả Tai Nghe
                </h1>
                <div className="grid grid-cols-4 gap-4 pb-6 h-[460px] pb-12">
                    <div className="bg-white p-4 rounded-lg">
                        {audios[12] && (
                            <ListCart
                                images={audios[12].images.anh1}
                                name={audios[12].name}
                            />
                        )}
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        {audios[13] && (
                            <ListCart
                                images={audios[13].images.anh1}
                                name={audios[13].name}
                            />
                        )}
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        {audios[14] && (
                            <ListCart
                                images={audios[14].images.anh1}
                                name={audios[14].name}
                            />
                        )}
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        {audios[15] && (
                            <ListCart
                                images={audios[15].images.anh1}
                                name={audios[15].name}
                            />
                        )}
                    </div>
                </div>
                <div className="w-full flex align-center justify-center">
                    <div className="flex align-center justify-center w-1/5 ">
                        <ButtonKPInter
                            title="Xem Tất Cả"
                            icon={true}
                            audio={true}
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6 container mx-auto pt-12">
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
            <div className="container mx-auto">
                <SlideCartLaptop />
            </div>
            <div>
                <Note page="Tai Nghe Và Loa" />
            </div>
        </div>
    );
};
export default Audio;