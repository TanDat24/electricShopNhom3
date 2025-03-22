import { useProducts } from "../../../api/WearablesAPI";
import CartLg from "./CartUI/CartLg";
import ListCart from "./CartUI/ListCart";

// eslint-disable-next-line react/prop-types
const TabWear = ({ activeTab, index, title, describe }) => {
  const { products, audios } = useProducts();
  const getListCartItems = (index) => {
    switch (index) {
      case 1:
        return [
          {
            image: products[19].images.anh1,
            name: "HUAWEI WATCH GT 5 Pro",
          },
          {
            image: products[11].images.anh1,
            name: "HUAWEI WATCH FIT 3",
          },
          {
            image: products[25].images.anh1,
            name: "HUAWEI WATCH GT 4",
          },
          {
            image: products[12].images.anh1,
            name: "HUAWEI WATCH D2",
          },
        ];
      case 3:
        return [
          {
            image: audios[10].images.anh1,
            name: "HUAWEI FreeBuds Pro 3",
          },
          {
            image: audios[12].images.anh1,
            name: "HUAWEI FreeBuds Pro 4",
          },
          {
            image: audios[9].images.anh1,
            name: "HUAWEI FreeLace",
          },
          {
            image: audios[14].images.anh1,
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
                <ListCart key={idx} images={item.image} name={item.name} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TabWear;
