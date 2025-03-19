const CartTabListsm = ({ titleStyle, title, desStyle, des, image,imageIcon }) => {
  return (
    <div
      className="h-1/2 rounded-2xl shadow-md bg-no-repeat bg-white"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "100% 334px", // Kích thước ảnh nền
        backgroundPosition: "center bottom", // Căn giữa theo chiều ngang, và nằm dưới cùng
      }}
    >
      <div className="rounded-2xl">
        <div className="pl-6">
          <div className="flex pt-10">
            <img src={imageIcon} className="w-12 mr-2" />
            <h2 className={`text-[24px] flex items-center ${titleStyle}`}>
              {title}
            </h2>
          </div>
          <p className={`pt-6 text-[22px] ${desStyle}`}>{des}</p>
        </div>
      </div>
    </div>
  );
};
export default CartTabListsm;
