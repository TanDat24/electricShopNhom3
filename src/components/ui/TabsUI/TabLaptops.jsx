import BannerItem from "../../pages/layout/BannerItem";
import ButtonKPBasic from "../ButtonUI/ButtonKPBasic";
import ButtonMNBasic from "../ButtonUI/ButtonMNBasic";
import { images } from "../../../assets/image";
import ContentCart from "../../pages/layout/ContentCart";
import CartComputer from "../CartUI/CartComputer";
import CartItemWatch from "../CartUI/CartItemWatch";
import ButtonUI from "../ButtonUI/ButtonUI";
import SlideCartLaptop from "../SlideUI/SlideCartLaptop";
import { useProducts } from "../../../../api/WearablesAPI";
const TabLaptops = () => {
<<<<<<< HEAD
  const { laptops } = useProducts();
  return (
    <div className="bg-background">
      <div className="h-3/5">
        {laptops[1] && (
          <BannerItem
            title={laptops[1].title}
            buttonkp={<ButtonKPBasic title="Khám Phá" />}
            buttonmn={<ButtonMNBasic />}
            image={laptops[1].images.anh1} // Lấy ảnh đầu tiên
          />
        )}
      </div>
      <div>
        <div>
          {laptops[2] && (
            <ContentCart
              title={laptops[2].title}
              name={laptops[2].name}
              image={Object.values(laptops[2].images)}
            />
          )}
=======
    const { laptops } = useProducts();
    return (
        <div className="bg-background">
            <div className="h-3/5">
                {laptops[1] && (
                    <BannerItem
                        title={laptops[1].title}
                        buttonkp={
                            <ButtonKPBasic
                                title="Khám Phá"
                                category="laptops"
                                productId={laptops[1].id}
                            />
                        }
                        buttonmn={<ButtonMNBasic />}
                        image={laptops[1].images.anh1}
                    />
                )}
            </div>
            <div>
                <div>
                    {laptops[2] && (
                        <ContentCart
                            title={laptops[2].title}
                            name={laptops[2].name}
                            image={Object.values(laptops[2].images)}
                            category="laptops"
                            productId={laptops[2].id}
                        />
                    )}
                </div>
            </div>
            <div className="container mx-auto m-6 rounded-xl bg-white p-4 h-[340px]">
                {laptops[3] && (
                    <CartComputer
                        des={laptops[3].des}
                        image={laptops[3].images.anh1}
                        category="laptops"
                        productId={laptops[3].id}
                    />
                )}
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
            <div className="container mx-auto">
                <SlideCartLaptop />
            </div>
>>>>>>> f1d5cb053aa52cce95bc525027c4747378020eb9
        </div>
      </div>
      <div className="container mx-auto m-6 rounded-xl bg-white p-4 h-[340px]">
        {laptops[3] && (
          <CartComputer des={laptops[3].des} image={laptops[3].images.anh1} />
        )}
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
      <div className="container mx-auto">
        <SlideCartLaptop />
      </div>
    </div>
  );
};
export default TabLaptops;
