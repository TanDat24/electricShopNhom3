// eslint-disable-next-line react/prop-types
const ListShopUI = ({ image }) => {
    return (
        <ul>
            <li className="pb-4 pr-4">
                <img
                    src={image}
                    alt=""
                    className="border border-solid rounded-lg border-borderColor w-full p-[10px] hover:border-[#cb5e5e]"
                />
            </li>
        </ul>
    );
};

export default ListShopUI;
