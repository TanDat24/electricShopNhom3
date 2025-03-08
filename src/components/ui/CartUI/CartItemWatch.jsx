import ButtonUI from "../ButtonUI/ButtonUI";
// eslint-disable-next-line react/prop-types
const CartItemWatch = ({ title, des, images, bgColor }) => {
    return (
        <div className="rounded-2xl" style={{ backgroundColor: bgColor }}>
            <div className="p-[4rem]">
                <h1 className="text-[44px] font-semibold">{title}</h1>
                <p className="text-[22px] text-textGray pt-3 pb-8">{des}</p>
                <ButtonUI title="Xem Ngay" />
            </div>
            <div
                className="bg-contain rounded-br-2xl bg-right-bottom bg-no-repeat h-[400px]"
                style={{
                    backgroundImage: `url(${images})`,
                }}
            ></div>
        </div>
    );
};
export default CartItemWatch;
