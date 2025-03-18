import { images } from "../../../assets/image";
// eslint-disable-next-line react/prop-types
const CartTapList = ({ title, des, image, titleStyle, desStyle }) => {
    return (
        <div>
            <div className="absolute left-12 z-10">
                <div className="flex pt-10">
                    <img src={images.appgallery} className="w-12 mr-2" />
                    <h2
                        className={`text-[24px] flex items-center ${titleStyle}`}
                    >
                        {title}
                    </h2>
                </div>
                <p className={` pt-6 text-[22px] ${desStyle}`}>{des}</p>
            </div>
            <img src={image} className="absolute rounded-2xl" />
        </div>
    );
};
export default CartTapList;
