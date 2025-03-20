import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ButtonKPBasic = ({ title, productId, category }) => {
    const path = `/vn/${category}/product-detail/${productId}`;

    return (
        <Link to={path}>
            <button className="text-[13px] mx-3 my-2 pt-[6px] pb-[6px] px-[16px] bg-colorText text-white rounded-lg hover:bg-darkBlue">
                {title}
            </button>
        </Link>
    );
};

export default ButtonKPBasic;
