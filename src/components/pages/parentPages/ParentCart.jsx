import { ProductProvider } from "../../../../api/WearablesAPI";
import ShoppingCart from "../Category/ShoppingCart";

const ParentCart = () => {
  return (
    <ProductProvider>
      <ShoppingCart />
    </ProductProvider>
  );
};

export default ParentCart;
