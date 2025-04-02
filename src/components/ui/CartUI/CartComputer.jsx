import ButtonUI from "../ButtonUI/ButtonUI";

// eslint-disable-next-line react/prop-types
<<<<<<< HEAD
const CartComputer = ({ name, des, image }) => {
  return (
    <div className="flex items-center justify-evenly bg-white rounded-md h-full overflow-hidden">
      <img src={image} alt="watchGt5Pro" className="w-80 mr-10 py-4" />
      <div>
        <div className="w-full ">
          <p className="text-center text-[22px] font-medium py-2">{name}</p>
          <span className="text-textGray text-center text-[16px] py-4">
            {des}
          </span>
=======
const CartComputer = ({ des, image, productId, category }) => {
    return (
        <div className="flex items-center justify-evenly bg-white rounded-md h-full overflow-hidden">
            <img src={image} alt="watchGt5Pro" className="w-2/5 mr-10" />
            <div>
                <div className="w-full ">
                    <p className="text-center text-[22px] font-medium">
                        HUAWEI MatePad 11.5-inch
                    </p>
                    <span className="text-textGray">{des}</span>
                </div>
                <div className="flex items-center justify-center mt-2">
                    <ButtonUI
                        title="Khám Phá"
                        type="khampham"
                        productId={productId}
                        category={category}
                    />
                    <ButtonUI title="Mua ngay" type="muangay" />
                </div>
            </div>
>>>>>>> f1d5cb053aa52cce95bc525027c4747378020eb9
        </div>
        <div className="flex items-center justify-center mt-2">
          <ButtonUI title="Khám Phá" type="khampha" />
          <ButtonUI title="Mua ngay" type="muangay" />
        </div>
      </div>
    </div>
  );
};
export default CartComputer;
