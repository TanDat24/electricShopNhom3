// eslint-disable-next-line react/prop-types
const BannerItem = ({
  title,
  describe,
  image,
  buttonkp,
  buttonmn,
  isHalfCol = false,
}) => {
  return (
    <div className=" w-full h-full bg-white rounded-lg">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="cursor-pointer pt-10 text-[40px] font-bold leading-tight break-words text-center">
          {title}
        </h1>
        <h3 className="cursor-pointer font-[400] text-[26px] break-words">
          {describe}
        </h3>
        <div className="flex ">
          {buttonkp}
          {buttonmn}
        </div>
        <div className="mb-0">
          <img
            src={image}
            alt="watchGt5Pro"
            className={`${
              isHalfCol ? "w-[512px]" : "w-[1024px]"
            } cursor-pointer pb-[4px]`}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
export default BannerItem;
