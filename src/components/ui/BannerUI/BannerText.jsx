// eslint-disable-next-line react/prop-types
const BannerText = ({ text }) => {
    return (
        <span className="absolute top-[10px] left-[10px] text-white rounded text-[14px] bg-bgText p-[5px]">
            {text}
        </span>
    );
};
export default BannerText;
