import { ProductProvider } from "../../../api/WearablesAPI";
import ProductDetail from "./ProductDetail";

const ParentProductDetail = () => {
    return (
        <ProductProvider>
            <ProductDetail/>
        </ProductProvider>
    );
};

export default ParentProductDetail;
