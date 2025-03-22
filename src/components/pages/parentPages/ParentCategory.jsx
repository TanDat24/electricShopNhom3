import { ProductProvider } from "../../../../api/WearablesAPI";
import Category from "../Category/Category";

const ParentCategory = () => {
  return (
    <ProductProvider>
      <Category />
    </ProductProvider>
  );
};

export default ParentCategory;
