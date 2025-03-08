// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

function QuickView({ titles }) {
    return (
        <div>
            {titles.map((title, index) => (
                <a
                    key={index}
                    href="#"
                    className="text-[24px] hover:underline text-[#6b6b6b] block"
                >
                    {title}
                </a>
            ))}
        </div>
    );
}
QuickView.propTypes = {
    titles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default QuickView;
