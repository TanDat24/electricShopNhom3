import ButtonUI from "../ButtonUI/ButtonUI";

// eslint-disable-next-line react/prop-types
const CartComputer = ({ des, image }) => {
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
                    <ButtonUI title="Khám Phá" type="khampham" />
                    <ButtonUI title="Mua ngay" type="muangay" />
                </div>
            </div>
        </div>
    );
};
export default CartComputer;
