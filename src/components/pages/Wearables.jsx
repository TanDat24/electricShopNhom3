import BannerItem from "./layout/BannerItem";
import ButtonKPBasic from "../ui/ButtonUI/ButtonKPBasic";
import ButtonMNBasic from "../ui/ButtonUI/ButtonMNBasic";
import { images } from "../../assets/image";
import CartItem from "./layout/CartItem";
import ContentCart from "./layout/ContentCart";
import CartComputer from "../ui/CartUI/CartComputer";
import ListCart from "../ui/CartUI/ListCart";
import ButtonKPInter from "../ui/ButtonUI/ButoonKPInter";
import CartItemWatch from "../ui/CartUI/CartItemWatch";
import Note from "./layout/Note";
import { useProducts } from "../../../api/WearablesAPI";

// eslint-disable-next-line react/prop-types
function Wearables({ headerHeight }) {
  const { products } = useProducts();

  return (
    <div
      className="bg-background pt-[3rem]"
      style={{
        minHeight: `calc(100vh - ${headerHeight}px)`,
        marginTop: `${headerHeight}px`,
      }}
    >
      {products[1] && (
        <BannerItem
          title={products[1].title}
          describe={products[1].des}
          buttonkp={
            <ButtonKPBasic
              title="Khám phá"
              productId={products[1].id} // Truyền `id` thay vì `name`
              category="wearables"
            />
          }
          buttonmn={<ButtonMNBasic />}
          image={products[1].image[0]} // Lấy ảnh đầu tiên
        />
      )}
      <div className="container mx-auto">
        <h1 className="text-[50px] pt-[80px] pb-12 flex align-center justify-center font-semibold">
          Chọn Thiết Bị Đeo Phù Hợp
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
        {products[2] && (
          <ContentCart
            id="watch-ultimate"
            title={products[2].title}
            des={products[2].des}
            name={products[2].name}
            image={products[2].image}
          />
        )}
      </div>
      <div>
        {products[3] && (
          <ContentCart
            id="watch-series"
            title={products[3].title}
            des={products[3].des}
            name={products[3].name}
            image={products[3].image}
          />
        )}
        <div className="container mx-auto m-6 rounded-xl bg-white p-4 h-[340px]">
          {products[4] && (
            <CartComputer des={products[4].des} image={products[4].image} />
          )}
        </div>
      </div>
      <div>
        {products[5] && (
          <ContentCart
            id="watch-series"
            title={products[5].title}
            des={products[5].des}
            name={products[5].name}
            image={products[5].image}
          />
        )}
        <div className="container mx-auto rounded-xl mt-4 pb-12">
          <div className="grid grid-cols-12 gap-4 h-[340px]">
            <div className="col-span-6 bg-white p-2 rounded-lg h-full">
              {products[6] && (
                <CartComputer des={products[6].des} image={products[6].image} />
              )}
            </div>
            <div className="col-span-3 bg-white p-2 rounded-lg">
              {products[7] && (
                <ListCart
                  images={products[7].image}
                  name={products[7].name}
                  des1={products[7].des}
                />
              )}
            </div>
            <div className="col-span-3 bg-white p-2 rounded-lg">
              {products[8] && (
                <ListCart
                  images={products[8].image}
                  name={products[8].name}
                  des1={products[8].des}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        {products[9] && (
          <ContentCart
            id="watch-series"
            title={products[9].title}
            des={products[9].des}
            name={products[9].name}
            image={products[9].image}
          />
        )}
        <div className="container mx-auto pb-12 pt-4">
          <div className="grid grid-cols-2 gap-4 h-[340px]">
            <div className="bg-white p-4 rounded-lg">
              {products[10] && (
                <CartComputer
                  des={products[10].des}
                  image={products[10].image}
                />
              )}
            </div>
            <div className="bg-white p-4 rounded-lg">
              {products[11] && (
                <CartComputer
                  des={products[11].des}
                  image={products[11].image}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        {products[12] && (
          <ContentCart
            id="watch-series"
            title={products[12].title}
            des={products[12].des}
            name={products[12].name}
            image={products[12].image}
          />
        )}
        <div className="container mx-auto m-6 rounded-xl bg-white p-4 h-[340px]">
          {products[13] && (
            <CartComputer des={products[13].des} image={products[13].image} />
          )}
        </div>
      </div>
      <div className="container mx-auto">
        <h1 className="text-[50px] pt-[80px] pb-12 flex align-center justify-center font-semibold ">
          Tất Cả Thiết Bị Đeo Và Phụ Kiện
        </h1>
        <div className="grid grid-cols-4 gap-4 pb-6 h-[460px] pb-12">
          <div className="bg-white p-4 rounded-lg">
            {products[14] && (
              <ListCart images={products[14].image} name={products[14].name} />
            )}
          </div>
          <div className="bg-white p-4 rounded-lg">
            {products[15] && (
              <ListCart images={products[15].image} name={products[15].name} />
            )}
          </div>
          <div className="bg-white p-4 rounded-lg">
            {products[16] && (
              <ListCart images={products[16].image} name={products[16].name} />
            )}
          </div>
          <div className="bg-white p-4 rounded-lg">
            {products[17] && (
              <ListCart images={products[17].image} name={products[17].name} />
            )}
          </div>
        </div>
        <div className="w-full flex align-center justify-center">
          <div className="flex align-center justify-center w-1/5 ">
            <ButtonKPInter title="Xem Tất Cả" icon={true} watch={true} />
          </div>
        </div>
      </div>
      <div className="container mx-auto pt-12">
        <div className="grid grid-cols-2 gap-6">
          <CartItemWatch
            title="Thế Giới Phụ Kiện"
            des="Đa Dạng Lựa Chọn, Phù Hợp Mọi Phong Cách"
            images={images.DayDH}
            bgColor="white"
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
        <h1 className="text-[50px] pt-[80px] pb-12 flex align-center justify-center font-semibold ">
          Tại Sao Lại Chọn Thiết Bị Đeo TalDat?
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
        <h1 className="text-[50px] pt-[80px] pb-12 flex align-center justify-center font-semibold ">
          Ứng Dụng TalDat Health
        </h1>
      </div>
      <div>
        <Note page="Thiết Bị Đeo" />
      </div>
    </div>
  );
}

export default Wearables;
