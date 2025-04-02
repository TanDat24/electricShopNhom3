import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ButtonKPBasic = ({ title, productId, category }) => {
    // const path = `/vn/${category}/product-detail/${productId}`;
    const navigate = useNavigate();

    const handleClick = () => {
        // Debug để kiểm tra giá trị trước khi điều hướng
        navigate(`/vn/${category}/product-detail/${productId}`, {
            state: { category },
        });
    };
    return (
        // <Link to={path}>
        <button
            loading="lazy"
            className="text-[13px] mx-3 my-2 pt-[6px] pb-[6px] px-[16px] bg-colorText text-white rounded-lg hover:bg-darkBlue"
            onClick={handleClick}
        >
            {title}
        </button>
        // </Link>
    );
};

export default ButtonKPBasic;
