import { useState } from "react";

// eslint-disable-next-line react/prop-types
const RatingStars = ({ rating, setRating, interactive = false }) => {
    const [hoveredStar, setHoveredStar] = interactive
        ? // eslint-disable-next-line react-hooks/rules-of-hooks
          useState(0)
        : [null, () => {}];

    const starStyles = {
        container: { display: "flex", alignItems: "center", margin: "10px 0" },
        star: {
            fontSize: "24px",
            cursor: interactive ? "pointer" : "default",
            margin: "0 2px",
        },
        unselected: { color: "#ddd" },
        selected: { color: "#363636", fontWeight: "bold" },
        hovered: { color: "#363636" },
    };

    return (
        <div style={starStyles.container}>
            {[1, 2, 3, 4, 5].map((star) => {
                let starStyle = { ...starStyles.star };
                if (star <= rating) {
                    starStyle = { ...starStyle, ...starStyles.selected };
                } else if (interactive && star <= hoveredStar) {
                    starStyle = { ...starStyle, ...starStyles.hovered };
                } else {
                    starStyle = { ...starStyle, ...starStyles.unselected };
                }

                return (
                    <span
                        key={star}
                        style={starStyle}
                        onClick={
                            interactive ? () => setRating(star) : undefined
                        }
                        onMouseEnter={
                            interactive ? () => setHoveredStar(star) : undefined
                        }
                        onMouseLeave={
                            interactive ? () => setHoveredStar(0) : undefined
                        }
                    >
                        ★
                    </span>
                );
            })}
            {rating > 0 && interactive && (
                <span style={{ marginLeft: "10px", fontSize: "16px" }}>
                    {rating}/5
                </span>
            )}
        </div>
    );
};

export default RatingStars;
