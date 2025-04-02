import { useState } from "react";
import CartTapList from "../CartUI/CartTabList";
import CartTabDoubleList from "../CartUI/CartTabDoubleList";
import { images } from "../../../assets/image";

const SlideCartLaptop = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 2;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };
  return (
    <div className="relative w-full  pt-10 overflow-hidden h-[720px]">
      <div
        className="flex transition-transform duration-500 pb-2 flex-nowrap"
        style={{
          width: `${4 * 500}px`,
          transform: `translateX(-${currentIndex * 25}%)`,
        }}
      >
        {Array.from({ length: 4 }).map((_, index) => {
          let componentToRender;

          if (index % 4 === 0) {
            componentToRender = (
              <CartTapList
                title="AppGallery"
                des="Tận Hưởng Tiện Nghi"
                image={images.mobileservices}
              />
            );
          } else if (index % 4 === 1) {
            componentToRender = <CartTabDoubleList 
                image1={images.mobileservices3}
                title1="Tìm Kiếm AI"
                des1="Nhận tệp trên điện thoại di động và máy tính bảng khi được kết nối ở một nơi."
                imageIcon1={images.aiSearch}

                image2={images.mobileservices4}
                title2="HUAWEI Music"
                des2="Khoảnh Khắc Của Bạn,
                        Âm Nhạc Của Bạn"
                imageIcon2={images.music}
                desStyle="text-white"
                titleStyle="text-white"
            />;
          } else if (index % 4 === 2) {
            componentToRender = (
              <CartTapList
                title="HUAWEI Video"
                des="Mở Rộng Tầm Nhìn"
                image={images.mobileservices2}
                titleStyle="text-white"
                desStyle="text-white"
              />
            );
          } else if (index % 4 === 3) {
            componentToRender = <CartTabDoubleList 
            image1={images.mobileservices3}
            title1="HUAWEI Assistant TODAY"
            des1="Trợ Lý Thông Minh Cho Cuộc Sống"
            imageIcon1={images.assistantToday}

            image2={images.mobileservices3}
            title2="HUAWEI Mobile Cloud"
            des2="Đồng Hành Ở Mọi Nơi"
            imageIcon2={images.cloud}
            />;
          }

          return (
            <div
              key={index}
              className="w-[700px] h-auto bg-white flex rounded-xl mr-4 relative"
            >
              {componentToRender}
            </div>
          );
        })}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute top-1/2 w-12 h-12 left-[1rem] transform -translate-y-1/2 bg-black bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-50"
      >
        ❮
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 w-12 h-12 right-[1rem] transform -translate-y-1/2 bg-black bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-50"
      >
        ❯
      </button>
      
    </div>
  );
};
export default SlideCartLaptop;
