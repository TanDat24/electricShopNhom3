import { ProductProvider } from "../../../api/WearablesAPI";
import ModelButtonAllTablet from "./ModelButtonAllTablet";
import ModelButtonAllWatch from "./ModelButtonAllWatch";
import ModelButtonAllAudio from "./ModelButtonAllAudio";

// eslint-disable-next-line react/prop-types
const ParentComponent = ({ onClose, type }) => {
    return (
        <ProductProvider>
            {type === "watch" && <ModelButtonAllWatch onClose={onClose} />}
            {type === "tablet" && <ModelButtonAllTablet onClose={onClose} />}
            {type === "audio" && <ModelButtonAllAudio onClose={onClose} />}
        </ProductProvider>
    );
};

export default ParentComponent;
