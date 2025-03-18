import { images } from "../../../assets/image";
import CartTabListsm from "./CartTabListsm";

// eslint-disable-next-line react/prop-types
const CartTabDoubleList = ({ titleStyle, desStyle, title1,  des1, image1,imageIcon1, title2,  des2, image2,imageIcon2 }) => {
  return (
    <div className="flex flex-col gap-4 bg-background w-full h-[680px] ">
      <CartTabListsm 
         image={image1}
         title={title1}
         des={des1}
         imageIcon={imageIcon1}
      />
      <CartTabListsm 
        image={image2}
        title={title2}
        des={des2}
        imageIcon={imageIcon2}
        desStyle={desStyle}
        titleStyle={titleStyle}
      />
    </div>
  );
};

export default CartTabDoubleList;
