import CartLg from "./CartUI/CartLg";
import ListCart from "./CartUI/ListCart";
import { images } from "../../assets/image";
import CartComputer from "./CartUI/CartComputer";
// eslint-disable-next-line react/prop-types
const TabComputer = ({ activeTab, index }) => {
  return (
    <div>
      {activeTab === index && (
        <div className="grid grid-cols-10 gap-2">
          <div className="col-span-4 bg-white rounded-md h-[700px]">
            <CartLg
              index={index}
              title="Máy Tính Bảng"
              describe="Giải Trí Và Làm Việc Hiệu Suất Mỗi Ngày"
            />
          </div>
          <div className="col-span-6 flex flex-col">
            <div className="h-full mb-2">
              <CartComputer
                name="HUAWEI MatePad Pro"
                des=" "
                image={images.matepad115}
              />
            </div>
            <div className="h-1/2 grid grid-cols-2 gap-2">
              <div className="bg-white rounded-md h-full overflow-hidden">
                <ListCart images={images.tapletImg} name="HUAWEI MatePad Pro" />
              </div>
              <div className="bg-white rounded-md h-full overflow-hidden">
                <ListCart
                  images={images.huaweiMatepadSE}
                  name="HUAWEI MatePad Pro"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabComputer;
