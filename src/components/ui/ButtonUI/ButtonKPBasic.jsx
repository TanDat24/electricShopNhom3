import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ButtonKPBasic = ({ title }) => {
  return (
    <button className="text-[13px] mx-3 my-2 pt-[6px] pb-[6px] px-[16px] bg-colorText text-white rounded-lg hover:bg-darkBlue">
      <Link to="/vn/maytinhban/latop">{title}</Link>
    </button>
  );
};

export default ButtonKPBasic;
