import { images } from "../../assets/image";
import CartLg from "./CartUI/CartLg";
import ListCart from "./CartUI/ListCart";
// eslint-disable-next-line react/prop-types
const TabWear = ({ activeTab, index, title, describe }) => {
    const getListCartItems = (index) => {
        switch (index) {
            case 1:
                return [
                    {
                        image: images.watchGt5Pro,
                        name: "HUAWEI WATCH GT 5 Pro",
                    },
                    {
                        image: images.watchFit3Pc,
                        name: "HUAWEI WATCH FIT 3",
                    },
                    {
                        image: images.watchGt4,
                        name: "HUAWEI WATCH GT 4",
                    },
                    {
                        image: images.watchD2Pc,
                        name: "HUAWEI WATCH D2",
                    },
                ];
            case 3:
                return [
                    {
                        image: images.freebudsPro3,
                        name: "HUAWEI FreeBuds Pro 3",
                    },
                    {
                        image: images.freebudsPropc,
                        name: "HUAWEI FreeBuds Pro 4",
                    },
                    {
                        image: images.freeLace,
                        name: "HUAWEI FreeLace",
                    },
                    {
                        image: images.soundJoy,
                        name: "HUAWEI Sound Joy",
                    },
                ];
            default:
                return [];
        }
    };
    return (
        <>
            {activeTab === index && (
                <div className="grid grid-cols-10 gap-2">
                    <CartLg index={index} title={title} describe={describe} />
                    <div className="col-span-6 h-full">
                        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
                            {getListCartItems(index).map((item, idx) => (
                                <ListCart
                                    key={idx}
                                    images={item.image}
                                    name={item.name}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default TabWear;
