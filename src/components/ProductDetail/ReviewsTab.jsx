import { useState, useEffect } from "react";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";

// eslint-disable-next-line react/prop-types
const ReviewsTab = ({ productId }) => {
    const [reviews, setReviews] = useState([]);
    const [isLoadingReviews, setIsLoadingReviews] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            setIsLoadingReviews(true);
            try {
                const response = await fetch(
                    "https://67da8b1935c87309f52cfe4b.mockapi.io/comment"
                );
                const data = await response.json();
                const formattedReviews = data.map((item) => ({
                    id: item.id,
                    user: item.user || `User_${item.id}`,
                    rating: item.rating || Math.floor(Math.random() * 5) + 1,
                    date: new Date(item.createdAt).toISOString().split("T")[0],
                    comment: item.comment || "",
                    likes: item.likes || 0,
                }));
                setReviews(formattedReviews);
                localStorage.setItem(
                    `product_reviews_${productId}`,
                    JSON.stringify(formattedReviews)
                );
            } catch (error) {
                console.error("Error fetching reviews:", error);
                const savedReviews = localStorage.getItem(
                    `product_reviews_${productId}`
                );
                if (savedReviews) setReviews(JSON.parse(savedReviews));
            } finally {
                setIsLoadingReviews(false);
            }
        };
        fetchReviews();
    }, [productId]);

    const calculateAverageRating = () => {
        if (reviews.length === 0) return 0;
        const sum = reviews.reduce(
            (total, review) => total + Number(review.rating),
            0
        );
        return (sum / reviews.length).toFixed(1);
    };

    return (
        <div className="product-reviews">
            <h2>Đánh Giá Sản Phẩm</h2>
            <div className="review-summary">
                <div className="average-rating">
                    <div className="big-rating">{calculateAverageRating()}</div>
                    <div className="total-reviews">
                        {reviews.length} Đánh Giá
                    </div>
                </div>
            </div>
            <ReviewList
                reviews={reviews}
                setReviews={setReviews}
                isLoadingReviews={isLoadingReviews}
                productId={productId}
            />
            <ReviewForm setReviews={setReviews} productId={productId} />
        </div>
    );
};

export default ReviewsTab;
