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

const MayTinhBan = () => {
  return (
    <div className="pt-[3rem] bg-background">
      <BannerItem
        title={"MateBook D 14"}
        buttonkp={<ButtonKPBasic title="Khám Phá" />}
        buttonmn={<ButtonMNBasic />}
        image={images.matebookD}
      />
      <div className="container mx-auto">
        <h1 className="text-[50px] pt-[80px] pb-12 flex align-center justify-center font-semibold">
          MatePad Nào Phù Hợp Cho Bạn?
        </h1>
        <div className="grid grid-cols-5 gap-4">
          <div></div>
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
        </div>
      </div>
      <div>
        <div>
          <ContentCart
            id="watch-ultimate"
            title="HUAWEI MatePad Pro Series"
            des="Khơi Nguồn Sáng Tạo"
            name="HUAWEI MatePad Pro"
          />
        </div>
      </div>
      <div>
        <div>
          <ContentCart
            id="watch-ultimate"
            title="HUAWEI MatePad Series"
            des="Đồng Hành Học Tập Và Làm Việc"
            name="HUAWEI MatePad 11.5'S"
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
            title="HUAWEI MatePad SE Series"
            des="Giải Trí Tại Nhà"
            name="HUAWEI MatePad SE"
          />
        </div>
      </div>
      <div>
        <div>
          <ContentCart
            id="watch-ultimate"
            title="HUAWEI MatePad T Series"
            des="Tận Hưởng Trọn Vẹn"
            name="HUAWEI MatePad T 10s"
          />
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
      <div><Note page="Máy Tính Bảng" /></div>
    </div>
  );
};
export default MayTinhBan;
