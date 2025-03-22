import { useState } from "react";
import BannerItem from "./layout/BannerItem";
import ButtonKPBasic from "../ui/ButtonUI/ButtonKPBasic";
import ButtonMNBasic from "../ui/ButtonUI/ButtonMNBasic";
import ButtonTab from "../ui/ButtonUI/ButtonTab";
import TabWear from "./../ui/TabWear";
import TabComputer from "./../ui/TabComputer";
import Note from "./layout/Note";
import { useProducts } from "../../../api/WearablesAPI";
// eslint-disable-next-line react/prop-types
const Home = ({ headerHeight }) => {
  const [activeTab, setActiveTab] = useState(1);
  const { products, laptops, tablets, audios } = useProducts();
  return (
    <div
      className="bg-background pt-[2rem]"
      style={{
        minHeight: `calc(100vh - ${headerHeight}px)`,
        marginTop: `${headerHeight}px`,
      }}
    >
      <div className="container mx-auto grid grid-cols-1 gap-2 pb-4">
        {products[1] && (
          <BannerItem
            title={products[1].title}
            describe={products[1].des}
            buttonkp={
              <ButtonKPBasic
                title="Khám phá"
                productId={products[1].name} // Truyền `id` thay vì `name`
                category="wearables"
              />
            }
            buttonmn={<ButtonMNBasic />}
            image={products[1].images.anh1} // Lấy ảnh đầu tiên
          />
        )}
        {products[2] && (
          <BannerItem
            title={products[2].title}
            describe={products[2].des}
            buttonkp={
              <ButtonKPBasic
                title="Khám phá"
                productId={products[2].name} // Truyền `id` thay vì `name`
                category="wearables"
              />
            }
            buttonmn={<ButtonMNBasic />}
            image={products[2].images.anh1} // Lấy ảnh đầu tiên
          />
        )}
        {tablets[1] && (
          <BannerItem
            title={tablets[1].title}
            describe={tablets[1].des}
            buttonkp={
              <ButtonKPBasic
                title="Khám phá"
                productId={tablets[1].name}
                category="tablets"
              />
            }
            buttonmn={<ButtonMNBasic />}
            image={tablets[1].images.anh1} // Lấy ảnh đầu tiên
          />
        )}
      </div>
      <div className="container mx-auto grid grid-cols-2 gap-2 ">
        <div className="w-full">
          {products[9] && (
            <BannerItem
              isHalfCol={true}
              title={products[9].title}
              describe={products[9].des}
              buttonkp={
                <ButtonKPBasic
                  title="Khám phá"
                  productId={products[9].name}
                  category="wearable"
                />
              }
              buttonmn={<ButtonMNBasic />}
              image={products[9].images.anh1} // Lấy ảnh đầu tiên
            />
          )}
        </div>
        <div className="w-full">
          {products[17] && (
            <BannerItem
              isHalfCol={true}
              title={products[17].title}
              describe={products[17].des}
              buttonkp={
                <ButtonKPBasic
                  title="Khám phá"
                  productId={products[17].name}
                  category="wearable"
                />
              }
              buttonmn={<ButtonMNBasic />}
              image={products[17].images.anh1} // Lấy ảnh đầu tiên
            />
          )}
        </div>
        <div className="w-full">
          {laptops[7] && (
            <BannerItem
              isHalfCol={true}
              title={laptops[7].title}
              describe={laptops[7].des}
              buttonkp={
                <ButtonKPBasic
                  title="Khám phá"
                  productId={laptops[7].name}
                  category="wearable"
                />
              }
              buttonmn={<ButtonMNBasic />}
              image={laptops[7].images.anh1} // Lấy ảnh đầu tiên
            />
          )}
        </div>
        <div className="w-full">
          {audios[1] && (
            <BannerItem
              title={audios[1].title}
              describe={audios[1].des}
              buttonkp={
                <ButtonKPBasic
                  title="Khám phá"
                  productId={audios[1].name}
                  category="wearable"
                />
              }
              buttonmn={<ButtonMNBasic />}
              image={audios[1].images.anh1} // Lấy ảnh đầu tiên
            />
          )}
        </div>
      </div>
      <div className="container mx-auto ">
        <div className="container mx-auto">
          <h1 className="p-10 pb-2 text-[40px] font-medium flex items-center justify-center">
            Xem Thêm Trong Cửa Hàng
          </h1>
          <div>
            <div className="flex space-x-4 w-full justify-center">
              <ButtonTab
                title="Thiết Bị Đeo"
                index={1}
                activeTab={activeTab}
                onClick={setActiveTab}
              />
              <ButtonTab
                title="Máy Tính Bảng"
                index={2}
                activeTab={activeTab}
                onClick={setActiveTab}
              />
              <ButtonTab
                title="Tai Nghe Và Loa"
                index={3}
                activeTab={activeTab}
                onClick={setActiveTab}
              />
            </div>
            <div className="w-full py-8 overflow-hidden">
              <div
                className="flex transition-all duration-300 ease-in-out transform"
                style={{
                  transform: `translateX(${(activeTab - 1) * -100}%)`,
                }}
              >
                <div className="min-w-full">
                  {products[6] && (
                    <TabWear
                      activeTab={activeTab}
                      index={1}
                      title={products[6].title}
                      describe={products[6].des}
                    />
                  )}
                </div>
                <div className="min-w-full">
                  <TabComputer activeTab={activeTab} index={2} />
                </div>
                <div className="min-w-full">
                  <TabWear
                    activeTab={activeTab}
                    index={3}
                    title="Tai Nghe Và Loa"
                    describe="Âm Thanh Ấn Tượng Và Điều Khiển Trực Quan"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Note />
      </div>
    </div>
  );
};

export default Home;
