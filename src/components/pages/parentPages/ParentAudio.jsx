import { ProductProvider } from "../../../../api/WearablesAPI";
import Audio from "./../Audio";

const ParentAudio = () => {
    return (
        <ProductProvider>
            <Audio />
        </ProductProvider>
    );
};

export default ParentAudio;
