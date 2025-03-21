import { ProductProvider } from "../../../../api/WearablesAPI";
import Wearables from "../Wearables";

const ParentWearable = () => {
    return (
        <ProductProvider>
            <Wearables />
        </ProductProvider>
    );
};

export default ParentWearable;
