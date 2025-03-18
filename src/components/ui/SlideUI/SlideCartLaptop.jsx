import { useState } from "react";
import CartTapList from "../CartUI/CartTabList";
import CartTabDoubleList from "../CartUI/CartTabDoubleList";
import { images } from "../../../assets/image";

const SlideCartLaptop = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = 2;

    const goToPrevious = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };
    return (
        <div className="relative w-full pl-[11rem] pt-10 overflow-hidden h-[720px]">
            <div
                className="flex transition-transform duration-500 pb-2 flex-nowrap"
                style={{
                    width: `${4 * 500}px`,
                    transform: `translateX(-${currentIndex * 20}%)`,
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
                        componentToRender = <CartTabDoubleList />;
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
                        componentToRender = <CartTabDoubleList />;
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
                className="absolute top-1/2 w-12 h-12 left-[10rem] transform -translate-y-1/2 bg-black bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-50"
            >
                ❮
            </button>

            <button
                onClick={goToNext}
                className="absolute top-1/2 w-12 h-12 right-[10rem] transform -translate-y-1/2 bg-black bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-50"
            >
                ❯
            </button>
        </div>
    );
};
export default SlideCartLaptop;
