// eslint-disable-next-line react/prop-types
const FooterLinkBlock = ({ title, links }) => {
    return (
        <div className="space-y-4">
            <h3 className="font-semibold text-lg pt-12 pb-4">{title}</h3>
            <ul className="space-y-2 text-textGray">
                {/* eslint-disable-next-line react/prop-types */}
                {links.map((link, index) => (
                    <li
                        key={index}
                        className="text-sm text-textGray hover:text-black cursor-pointer"
                    >
                        {link}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterLinkBlock;
