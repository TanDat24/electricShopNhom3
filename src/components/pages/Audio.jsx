import ButtonKPBasic from "../ui/ButtonUI/ButtonKPBasic";
import ButtonMNBasic from "../ui/ButtonUI/ButtonMNBasic";
import BannerItem from "./layout/BannerItem";
import { images } from "../../assets/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight} from "lucide-react";
import CartItem from "./layout/CartItem";
import ContentCart from "./layout/ContentCart";
import CartComputer from "../ui/CartUI/CartComputer";
import InforItme from "../ui/InforItme";
import ButtonKPInter from "../ui/ButtonUI/ButoonKPInter";
import ListCart from "../ui/CartUI/ListCart";
import CartItemWatch from "../ui/CartUI/CartItemWatch";
import SlideCartLaptop from "../ui/SlideUI/SlideCartLaptop";
import { Link } from "react-router-dom";
import Note from "./layout/Note";

const Audio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };
  return (
    <div className="pt-[3rem] bg-background">
      <BannerItem
        title={"HUAWEI FreeBuds Pro 4"}
        describe={"Catch the Sound"}
        buttonkp={<ButtonKPBasic title="Khám Phá" />}
        buttonmn={<ButtonMNBasic />}
        image={images.freebuds}
      />
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
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
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
            title="WATCH Ultimate Series"
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
            title="Health & Kids Watch"
            des="Sức Khỏe Và Gia Đình"
            images={images.watchD2Nav}
          />
        </div>
      </div>
      <div>
        <div>
          <ContentCart
            id="watch-ultimate"
            title="FreeBuds Pro Series"
            des="Trải Nghiệm Công Nghệ Tiên Tiến"
            name="HUAWEI FreeBuds Pro 4"
          />
        </div>
      </div>
      <div className="container mx-auto pb-12 pt-4">
        <div className="grid grid-cols-2 gap-4 h-[340px]">
          <div className="bg-white p-4 rounded-lg">
            <CartComputer des="Thiết Kế Thời Trang Và Chăm Sóc Sức Khỏe" />
          </div>
          <div className="bg-white p-4 rounded-lg">
            <CartComputer des="Thiết Kế Thời Trang Và Chăm Sóc Sức Khỏe" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <ContentCart
            id="watch-ultimate"
            title="FreeBuds Pro Series"
            des="Trải Nghiệm Công Nghệ Tiên Tiến"
            name="HUAWEI FreeBuds Pro 4"
          />
        </div>
      </div>
      <div className="container mx-auto m-6 rounded-xl bg-white p-4 h-[340px]">
        <CartComputer des="Tai nghe và đồng hồ - Hai trong Một Chống ồn cuộc gọi AI" />
      </div>
      <div>
        <div>
          <ContentCart
            id="watch-ultimate"
            title="Innovation Series"
            des="Phong Cách Sáng Tạo"
            name="HUAWEI FreeClip"
          />
        </div>
      </div>
      <div>
        <div>
          <ContentCart
            id="watch-ultimate"
            title="Vitality Series"
            des="Phong Cách Thời Trang"
            name="HUAWEI FreeBuds 6i"
          />
        </div>
      </div>
      <div className="container mx-auto pb-12 pt-4">
        <div className="grid grid-cols-2 gap-4 h-[340px]">
          <div className="bg-white p-4 rounded-lg">
            <CartComputer des="Thiết Kế Thời Trang Và Chăm Sóc Sức Khỏe" />
          </div>
          <div className="bg-white p-4 rounded-lg">
            <CartComputer des="Thiết Kế Thời Trang Và Chăm Sóc Sức Khỏe" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <ContentCart
            id="watch-ultimate"
            title="Vitality Series"
            des="Phong Cách Thời Trang"
            name="HUAWEI FreeBuds 6i"
          />
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
            <ListCart
              images={images.watchGt5Pro}
              name="TalDat WATCH Ultimate"
            />
          </div>
          <div className="bg-white p-4 rounded-lg">
            <ListCart
              images={images.watchGt5Pro}
              name="TalDat WATCH GT 5 Pro"
            />
          </div>
          <div className="bg-white p-4 rounded-lg">
            <ListCart images={images.watchGt5Pro} name="TalDat WATCH FIT 3" />
          </div>
          <div className="bg-white p-4 rounded-lg">
            <ListCart images={images.watchGt5Pro} name="TalDat WATCH D2" />
          </div>
        </div>
        <div className="w-full flex align-center justify-center">
          <div className="flex align-center justify-center w-1/5 ">
            <ButtonKPInter title="Xem Tất Cả" icon={true} watch={true} />
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
      <div><Note page="Tai Nghe Và Loa"/></div>
    </div>
  );
};
export default Audio;
