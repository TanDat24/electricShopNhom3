import { ProductProvider } from "../../../../api/WearablesAPI";
import Home from "../Home";

const ParentHome = () => {
    return (
        <ProductProvider>
            <Home />
        </ProductProvider>
    );
};

export default ParentHome;
