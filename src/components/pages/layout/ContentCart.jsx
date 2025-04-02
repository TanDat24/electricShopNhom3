// eslint-disable-next-line no-unused-vars
import React from "react";
import BannerText from "../../ui/BannerUI/BannerText";
import ButtonKPInter from "../../ui/ButtonUI/ButoonKPInter";
import ButtonMNInter from "../../ui/ButtonUI/ButtonMNInter";

// eslint-disable-next-line react/prop-types
const ContentCart = ({ title, des, name, id, image = [] }) => {
  const img = Object.values(image);
  return (
    <div className="container mx-auto" id={id}>
      <h1 className="text-[50px] pt-[80px] flex align-center justify-center font-semibold">
        {title}
      </h1>
      <p className="flex align-center justify-center text-[21px] pb-6">{des}</p>
      <div className="bg-white p-4 rounded-xl cursor-pointer">
        <div className="grid grid-cols-11 gap-2 h-1/2">
          {img[0] && (
            <div className="col-span-5 bg-white">
              <img
                src={img[0]}
                className="rounded-lg h-[500px] w-full object-cover"
                loading="lazy"
              />
            </div>
          )}

          {img[1] && (
            <div className="col-span-3 bg-white relative">
              <BannerText text="Vật Liệu Kim Loại Lỏng" />
              <img
                src={img[1]}
                className="rounded-lg h-[500px] w-full object-cover"
              />
            </div>
          )}

          <div className="col-span-3 bg-white">
            <div className="grid grid-rows-2 gap-2 h-[500px]">
              {img[2] && (
                <div className="bg-white rounded-lg relative">
                  <BannerText text="Tập Luyện Chuyên Nghiệp" />
                  <img
                    src={img[2]}
                    className="rounded-lg h-full w-full object-cover"
                  />
                </div>
              )}
              {img[3] && (
                <div className="bg-white rounded-lg relative">
                  <BannerText text="Bản Đồ Sân Golf" />
                  <img
                    src={img[3]}
                    className="rounded-lg h-full w-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex align-center justify-between pt-8">
          <p className="text-[34px] pt-2 font-semibold">{name}</p>
          <div className="w-1/5 flex">
            <ButtonKPInter title="Khám Phá" />
            <ButtonMNInter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCart;
