import { ProductProvider } from "../../../../api/WearablesAPI";
import MayTinhBan from "./../MayTinhBan";

const ParentTaplet = () => {
    return (
        <ProductProvider>
            <MayTinhBan />
        </ProductProvider>
    );
};

export default ParentTaplet;
