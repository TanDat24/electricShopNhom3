// eslint-disable-next-line react/prop-types
const ButtonTab = ({ title, index, activeTab, onClick }) => {
    return (
        <button
            className={`py-4 px-6 text-lg font-medium border-b-2 transition-all duration-300 ease-in-out
                ${
                    activeTab === index
                        ? "border-colorText text-colorText transform scale-105"
                        : "border-transparent text-gray-500 hover:text-colorText"
                }
            `}
            onClick={() => onClick(index)}
        >
            {title}
        </button>
    );
};

export default ButtonTab;
