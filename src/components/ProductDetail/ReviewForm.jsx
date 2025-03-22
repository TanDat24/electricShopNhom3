import { useState } from "react";
import RatingStars from "./RatingStars";

const ReviewForm = ({ setReviews, productId }) => {
    const [userRating, setUserRating] = useState(0);
    const [userReview, setUserReview] = useState("");

    const handleSubmitReview = () => {
        if (userRating === 0 || userReview.trim() === "") {
            alert("Vui lòng nhập đánh giá và chọn số sao");
            return;
        }

        const newReview = {
            id: Date.now().toString(),
            user: "User_" + Math.floor(Math.random() * 1000),
            rating: userRating,
            date: new Date().toISOString().split("T")[0],
            comment: userReview,
            likes: 0,
        };

        setReviews((prevReviews) => {
            const updatedReviews = [...prevReviews, newReview];
            localStorage.setItem(
                `product_reviews_${productId}`,
                JSON.stringify(updatedReviews)
            );
            return updatedReviews;
        });

        setUserRating(0);
        setUserReview("");
    };

    return (
        <div className="write-review">
            <h3>Viết đánh giá</h3>
            <div className="rating-input">
                <span style={{ marginRight: "10px" }}>Xếp hạng:</span>
                <RatingStars
                    rating={userRating}
                    setRating={setUserRating}
                    interactive={true}
                />
            </div>
            <textarea
                className="review-textarea"
                placeholder="Chia sẻ trải nghiệm của bạn về sản phẩm này..."
                value={userReview}
                onChange={(e) => setUserReview(e.target.value)}
                style={{
                    width: "100%",
                    minHeight: "120px",
                    padding: "10px",
                    marginTop: "10px",
                }}
            />
            <button className="submit-review-btn" onClick={handleSubmitReview}>
                Gửi Đánh Giá
            </button>
        </div>
    );
};

export default ReviewForm;
