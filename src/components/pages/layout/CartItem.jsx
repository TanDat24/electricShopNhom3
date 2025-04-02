// eslint-disable-next-line react/prop-types
const CartItem = ({ id, title, des, images }) => {
    const handleClick = () => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };
    return (
        <div
            className="bg-white p-2 mb-12 rounded-xl group"
            onClick={handleClick}
        >
            <div className=" p-4">
                <h3 className="flex align-center justify-center text-[22px] pb-2 font-semibold cursor-pointer">
                    {title}
                </h3>
                <p className="flex align-center justify-center text-textGray text-[18px] cursor-pointer">
                    {des}
                </p>
            </div>
            <div className="relative truncate w-full box-border flex align-center justify-center rounded-b-lg ">
                <img
                    src={images}
                    alt="watchUltimate"
                    className="rounded-b-lg w-full h-full transition duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="w-10 h-10 bg-[#50505085] absolute right-4 bottom-4 rounded-full overflow-hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-[20px] w-full h-full p-3 text-white font-semibold group-hover:animate-bounce"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};
export default CartItem;
