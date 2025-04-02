import { ProductProvider } from "../../../../api/WearablesAPI";
import TabMonitor from "../../ui/TabsUI/TabMonitor";

const ParentMonitor = () => {
    return (
        <ProductProvider>
            <TabMonitor />
        </ProductProvider>
    );
};

export default ParentMonitor;
