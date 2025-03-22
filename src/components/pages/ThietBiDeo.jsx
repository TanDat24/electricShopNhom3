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

const ThietBiDeo = () => {
  const { wearables } = useProducts();
  return (
    <div className="pt-[3rem] bg-background">
      {wearables[1] && (
        <BannerItem
          title={wearables[1].title}
          describe={wearables[1].des}
          buttonkp={<ButtonKPBasic title="Khám Phá" />}
          buttonmn={<ButtonMNBasic />}
          image={wearables[1].images.anh1}
        />
      )}
      <div className="container mx-auto">
        <h1 className="text-[50px] pt-[80px] pb-12 flex align-center justify-center font-semibold">
          MatePad Nào Phù Hợp Cho Bạn?
        </h1>
        <div className="grid grid-cols-5 gap-4">
          <div></div>
          {wearables[2] && (
            <CartItem
              id="watch-ultimate"
              title={wearables[2].title}
              des={wearables[2].des}
              images={wearables[2].images.anh1}
            />
          )}
          {wearables[3] && (
            <CartItem
              id="watch-ultimate"
              title={wearables[3].title}
              des={wearables[3].des}
              images={wearables[3].images.anh1}
            />
          )}
          {wearables[4] && (
            <CartItem
              id="watch-ultimate"
              title={wearables[4].title}
              des={wearables[4].des}
              images={wearables[4].images.anh1}
            />
          )}
        </div>
      </div>
      <div>
        <div>
          {wearables[2] && (
            <ContentCart
              id="watch-ultimate"
              title={wearables[2].title}
              des={wearables[2].des}
              name={wearables[2].name}
              image={Object.values(wearables[2].images)}
            />
          )}
        </div>
      </div>
      <div>
        <div>
          {wearables[3] && (
            <ContentCart
              id="watch-ultimate"
              title={wearables[3].title}
              des={wearables[3].des}
              name={wearables[3].name}
              image={Object.values(wearables[3].images)}
            />
          )}
        </div>
      </div>
      <div className="container mx-auto pb-12 pt-4">
        <div className="grid grid-cols-2 gap-4 h-[340px]">
          <div className="bg-white p-4 rounded-lg">
            {wearables[4] && (
              <CartComputer
                des={wearables[4].des}
                image={wearables[4].images.anh1}
              />
            )}
          </div>
          <div className="bg-white p-4 rounded-lg">
            {wearables[5] && (
              <CartComputer
                des={wearables[5].des}
                image={wearables[5].images.anh1}
              />
            )}
          </div>
        </div>
      </div>
      <div>
        <div>
          {wearables[6] && (
            <ContentCart
              id="watch-ultimate"
              title={wearables[6].title}
              des={wearables[6].des}
              name={wearables[6].name}
              image={Object.values(wearables[6].images)}
            />
          )}
        </div>
      </div>
      <div>
        <div>
          {wearables[7] && (
            <ContentCart
              id="watch-ultimate"
              title={wearables[7].title}
              des={wearables[7].des}
              name={wearables[7].name}
              image={Object.values(wearables[7].images)}
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
            {wearables[8] && (
              <ListCart
                images={wearables[8].images.anh1}
                name={wearables[8].name}
              />
            )}
          </div>
          <div className="bg-white p-4 rounded-lg">
            {wearables[9] && (
              <ListCart
                images={wearables[9].images.anh1}
                name={wearables[9].name}
              />
            )}
          </div>
          <div className="bg-white p-4 rounded-lg">
            {wearables[10] && (
              <ListCart
                images={wearables[10].images.anh1}
                name={wearables[10].name}
              />
            )}
          </div>
          <div className="bg-white p-4 rounded-lg">
            {wearables[11] && (
              <ListCart
                images={wearables[11].images.anh1}
                name={wearables[11].name}
              />
            )}
          </div>
        </div>
        <div className="w-full flex align-center justify-center">
          <div className="flex align-center justify-center w-1/5 ">
            <ButtonKPInter title="Xem Tất Cả" icon={true} tablet={true} />
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
export default ThietBiDeo;
