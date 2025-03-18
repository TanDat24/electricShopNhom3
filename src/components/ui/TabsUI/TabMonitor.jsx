import BannerItem from "../../pages/layout/BannerItem";
import ButtonKPBasic from "../ButtonUI/ButtonKPBasic";
import ButtonMNBasic from "../ButtonUI/ButtonMNBasic";
import ContentCart from "../../pages/layout/ContentCart";
import CartComputer from "../CartUI/CartComputer";
import CartItemWatch from "../CartUI/CartItemWatch";
import { images } from "../../../assets/image";
const TabMonitor = () => {
  return (
    <div>
      <div>
        <BannerItem
          title={"MateView SE"}
          buttonkp={<ButtonKPBasic title="Khám Phá" />}
          buttonmn={<ButtonMNBasic />}
          image={images.mateview}
        />
      </div>
      <div>
        <ContentCart
          id="watch-ultimate"
          title="MateView GT Series"
          name="MateView GT"
        />
      </div>
      <div>
        <ContentCart
          id="watch-ultimate"
          title="MateView SE Series"
          name="MateView SE"
        />
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
    </div>
  );
};
export default TabMonitor;
