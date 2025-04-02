import { ProductProvider } from "../../../../api/WearablesAPI";
import TabLaptops from "../../ui/TabsUI/TabLaptops";

const ParentLaptops = () => {
    return (
        <ProductProvider>
            <TabLaptops />
        </ProductProvider>
    );
};

export default ParentLaptops;
