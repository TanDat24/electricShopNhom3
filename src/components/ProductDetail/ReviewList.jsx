import RatingStars from "./RatingStars";

const ReviewList = ({ reviews, setReviews, isLoadingReviews, productId }) => {
    const handleLikeReview = (reviewId) => {
        const updatedReviews = reviews.map((review) =>
            review.id === reviewId
                ? { ...review, likes: review.likes + 1 }
                : review
        );
        setReviews(updatedReviews);
        localStorage.setItem(
            `product_reviews_${productId}`,
            JSON.stringify(updatedReviews)
        );
    };

    if (isLoadingReviews)
        return <div className="loading-reviews">Đang tải đánh giá...</div>;
    if (reviews.length === 0)
        return <div className="no-reviews">Chưa có đánh giá nào</div>;

    return (
        <div className="review-list">
            {reviews.map((review) => (
                <div key={review.id} className="review-item">
                    <div className="review-header">
                        <div className="reviewer-name">{review.user}</div>
                        <RatingStars
                            rating={review.rating}
                            interactive={false}
                        />
                    </div>
                    <div className="review-date">{review.date}</div>
                    <div className="review-comment">{review.comment}</div>
                    <div className="review-actions">
                        <button
                            className="like-button"
                            onClick={() => handleLikeReview(review.id)}
                        >
                            <span className="like-icon">👍</span>
                            <span className="like-count">{review.likes}</span>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReviewList;
