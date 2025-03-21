import ButtonKPBasic from "../ButtonUI/ButtonKPBasic";
import { images } from "../../../assets/image";
import { useProducts } from "../../../../api/WearablesAPI";

// eslint-disable-next-line react/prop-types
const CartLg = ({ index, title, describe }) => {
    const { products } = useProducts();

    const getButtonTitle = (index) => {
        switch (index) {
            case 1:
                return "Xem tất cả thiết bị đeo";
            case 2:
                return "Xem tất cả máy tính bảng";
            case 3:
                return "Xem tất cả tai nghe và loa";
            default:
                return "";
        }
    };

    const getCategory = (index) => {
        switch (index) {
            case 1:
                return "wearables"; // Đường dẫn: /vn/wearables/product-detail
            case 2:
                return "tablets"; // Đường dẫn: /vn/tablets/product-detail
            case 3:
                return "audio";
            case 4:
                return "laptops"; // Đường dẫn: /vn/audio/product-detail
            default:
                return "";
        }
    };

    const getBackgroundImage = (index) => {
        switch (index) {
            case 1:
                return images.wearablesWatchGt5ProBG;
            case 2:
                return images.tabletsHuaweiBG;
            case 3:
                return images.audioFreebudsPro4BG;
            default:
                return "";
        }
    };

    return (
        <div className="col-span-4 bg-white rounded-md h-[600px]">
            <img
                src={getBackgroundImage(index)}
                alt={index === 1 ? "watchGt5Pro" : "freebudsPro4"}
                className="w-full rounded-md"
            />
            <h1 className="p-4 text-[26px] font-medium cursor-pointer">
                {title}
            </h1>
            <p className="pl-4 pb-4">{describe}</p>
            <ButtonKPBasic
                title={getButtonTitle(index)}
                productId={products[8]?.id || "default-id"} // Kiểm tra xem sản phẩm có tồn tại không
                category={getCategory(index)}
            />
        </div>
    );
};

export default CartLg;
