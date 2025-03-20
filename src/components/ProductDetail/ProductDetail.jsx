import { useState, useEffect } from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("black");
  const [activeTab, setActiveTab] = useState("specs");

  // Review states
  const [userRating, setUserRating] = useState(0);
  const [userReview, setUserReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);
  const { productId } = useParams();
  // Sample product data
  const product = {
    id: "1",
    name: "Laptop RogStrix G18 ",
    rating: 4.8,
    reviews: "1k",
    price: 20000000,
    originalPrice: 25000000,
    discount: "17%",
    sold: "1.1k",
    remaining: "00:00:00",
    images: {
      black:
        "https://vn.store.asus.com/media/catalog/product/cache/3bea06a8f9af12bff161ee6fdcaca509/g/8/g814ji-n6063w.png",
      white:
        "https://lapvip.vn/upload/file/original/asus-rog-zephyrus-g14-2024-3-1714811607.jpg",
      redBlack:
        "https://vn.store.asus.com/media/catalog/product/cache/74e490e088db727ef90851ac50e1fa20/0/2/02_g_16_l_4_5.png",
    },
    specifications: {
      processor: "Intel Core i9-13980HX",
      ram: "32GB DDR5",
      storage: "2TB NVMe SSD",
      graphics: "NVIDIA GeForce RTX 4090 16GB",
      display: "18-inch QHD+ 240Hz",
      os: "Windows 11 Pro",
      battery: "90Wh",
      weight: "3.1kg",
      dimensions: "399 x 294 x 23.1 mm",
    },
  };

  // Star styling
  const starStyles = {
    container: {
      display: "flex",
      alignItems: "center",
      margin: "10px 0",
    },
    star: {
      fontSize: "24px",
      cursor: "pointer",
      margin: "0 2px",
    },
    unselected: {
      color: "#ddd",
    },
    hovered: {
      color: "#363636",
    },
    selected: {
      color: "#363636",
      fontWeight: "bold",
    },
  };

  // Fetch reviews from the API
  useEffect(() => {
    setSelectedImage(product.images.black);

    const fetchReviews = async () => {
      setIsLoadingReviews(true);
      try {
        // First check if we have any reviews in localStorage
        const savedReviews = localStorage.getItem(
          `product_reviews_${product.id}`
        );
        let localReviews = savedReviews ? JSON.parse(savedReviews) : [];

        // Then fetch from API
        const response = await fetch(
          "https://67da8b1935c87309f52cfe4b.mockapi.io/comment"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();

        // Transform API data to match our review structure
        const formattedReviews = data.map((item) => ({
          id: item.id,
          user: item.user || `User_${item.id}`,
          rating: item.rating || Math.floor(Math.random() * 5) + 1,
          date: item.createdAt
            ? new Date(item.createdAt).toISOString().split("T")[0]
            : new Date().toISOString().split("T")[0],
          comment: item.comment || item.description || "",
          likes: item.likes || 0,
        }));

        // Merge API reviews with localStorage reviews
        // First create a map of existing reviews by ID
        const reviewMap = new Map();
        localReviews.forEach((review) => {
          reviewMap.set(review.id, review);
        });

        // Add API reviews if they don't exist in local
        formattedReviews.forEach((review) => {
          if (!reviewMap.has(review.id)) {
            reviewMap.set(review.id, review);
          }
        });

        // Convert map back to array
        const mergedReviews = Array.from(reviewMap.values());

        // Save merged reviews to state and localStorage
        setReviews(mergedReviews);
        localStorage.setItem(
          `product_reviews_${product.id}`,
          JSON.stringify(mergedReviews)
        );
      } catch (error) {
        console.error("Error fetching reviews:", error);
        // Fallback to local storage if API fails
        const savedReviews = localStorage.getItem(
          `product_reviews_${product.id}`
        );
        if (savedReviews) {
          setReviews(JSON.parse(savedReviews));
        }
      } finally {
        setIsLoadingReviews(false);
      }
    };

    fetchReviews();
  }, []);

  // Submit new review
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

    // Add new review to the list
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);

    // Save to localStorage for persistence
    localStorage.setItem(
      `product_reviews_${product.id}`,
      JSON.stringify(updatedReviews)
    );

    // Reset form
    setUserRating(0);
    setUserReview("");
  };

  // Like a review
  const handleLikeReview = (reviewId) => {
    const updatedReviews = reviews.map((review) => {
      if (review.id === reviewId) {
        return { ...review, likes: review.likes + 1 };
      }
      return review;
    });

    setReviews(updatedReviews);
    localStorage.setItem(
      `product_reviews_${product.id}`,
      JSON.stringify(updatedReviews)
    );
  };

  const handleColorChange = (color) => {
    setSelectedImage(product.images[color]);
    setSelectedColor(color);
  };

  const handleThumbnailClick = (img) => {
    setSelectedImage(img);
    const colorKey = Object.keys(product.images).find(
      (key) => product.images[key] === img
    );
    if (colorKey) {
      setSelectedColor(colorKey);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Calculate average rating
  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce(
      (total, review) => total + Number(review.rating),
      0
    );
    return (sum / reviews.length).toFixed(1);
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="stars">
        {"★".repeat(fullStars)}
        {halfStar ? "½" : ""}
        {"☆".repeat(emptyStars)}
      </div>
    );
  };

  // Render interactive rating stars
  const renderRatingStars = () => {
    return (
      <div style={starStyles.container}>
        {[1, 2, 3, 4, 5].map((star) => {
          let starStyle = { ...starStyles.star };

          if (star <= userRating) {
            starStyle = { ...starStyle, ...starStyles.selected };
          } else if (star <= hoveredStar) {
            starStyle = { ...starStyle, ...starStyles.hovered };
          } else {
            starStyle = { ...starStyle, ...starStyles.unselected };
          }

          return (
            <span
              key={star}
              style={starStyle}
              onClick={() => setUserRating(star)}
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(0)}
            >
              ★
            </span>
          );
        })}
        {userRating > 0 && (
          <span style={{ marginLeft: "10px", fontSize: "16px" }}>
            {userRating}/5
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="product-detail-container">
      <p>{productId}</p>
      <div className="product-content">
        <div className="product-gallery">
          <div className="main-image">
            <img src={selectedImage} alt={product.name} />
          </div>
          <div className="thumbnail-row">
            {Object.values(product.images).map((img, index) => (
              <div
                key={index}
                className={`thumbnail ${img === selectedImage ? "active" : ""}`}
                onClick={() => handleThumbnailClick(img)}
              >
                <img src={img} alt={`${product.name} - ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="product-info">
          <div className="product-label">Yêu Thích</div>
          <h1 className="product-name">{product.name}</h1>
          <div className="product-stats">
            <div className="rating">
              <span>{calculateAverageRating()}</span>
              <div className="stars">
                <span className="star">★★★★★</span>
              </div>
            </div>
            <div className="reviews">{reviews.length} Đánh Giá</div>
            <div className="sold">{product.sold} Sold</div>
          </div>

          <div className="price-container">
            <div className="original-price">
              ₫{product.originalPrice.toLocaleString()}
            </div>
            <div className="current-price">
              ₫{product.price.toLocaleString()}
            </div>
            <div className="discount-tag">{product.discount}</div>
          </div>

          <div className="options-section">
            <div className="color-options">
              <div className="option-title">Chọn màu</div>
              <div className="colors-row">
                <button
                  onClick={() => handleColorChange("black")}
                  className={`color-option ${
                    selectedColor === "black" ? "selected" : ""
                  }`}
                >
                  Màu đen
                </button>
                <button
                  onClick={() => handleColorChange("white")}
                  className={`color-option ${
                    selectedColor === "white" ? "selected" : ""
                  }`}
                >
                  Màu trắng
                </button>
                <button
                  onClick={() => handleColorChange("redBlack")}
                  className={`color-option ${
                    selectedColor === "redBlack" ? "selected" : ""
                  }`}
                >
                  Màu đen đỏ
                </button>
              </div>
            </div>
          </div>

          <div className="quantity-section">
            <span className="quantity-label">Số Lượng</span>
            <div className="quantity-controls">
              <button onClick={decreaseQuantity} className="quantity-btn">
                -
              </button>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="quantity-input"
              />
              <button onClick={increaseQuantity} className="quantity-btn">
                +
              </button>
            </div>
          </div>

          <div className="action-buttons">
            <button className="add-to-cart-btn">
              <i className="cart-icon">🛒</i>
              Thêm Vào Giỏ Hàng
            </button>
            <button className="buy-now-btn">Mua Ngay</button>
          </div>
        </div>
      </div>

      <div className="product-details-tabs">
        <div className="tabs-header">
          <button
            className={`tab-button ${activeTab === "specs" ? "active" : ""}`}
            onClick={() => setActiveTab("specs")}
          >
            Thông Số Kỹ Thuật
          </button>
          <button
            className={`tab-button ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Đánh Giá ({reviews.length})
          </button>
        </div>

        {activeTab === "specs" && (
          <div className="technical-specifications">
            <h2>Thông Số Kỹ Thuật</h2>
            <div className="specs-table">
              <div className="spec-row">
                <div className="spec-name">Bộ vi xử lý</div>
                <div className="spec-value">
                  {product.specifications.processor}
                </div>
              </div>
              <div className="spec-row">
                <div className="spec-name">Bộ nhớ RAM</div>
                <div className="spec-value">{product.specifications.ram}</div>
              </div>
              <div className="spec-row">
                <div className="spec-name">Lưu trữ</div>
                <div className="spec-value">
                  {product.specifications.storage}
                </div>
              </div>
              <div className="spec-row">
                <div className="spec-name">Card đồ họa</div>
                <div className="spec-value">
                  {product.specifications.graphics}
                </div>
              </div>
              <div className="spec-row">
                <div className="spec-name">Màn hình</div>
                <div className="spec-value">
                  {product.specifications.display}
                </div>
              </div>
              <div className="spec-row">
                <div className="spec-name">Hệ điều hành</div>
                <div className="spec-value">{product.specifications.os}</div>
              </div>
              <div className="spec-row">
                <div className="spec-name">Pin</div>
                <div className="spec-value">
                  {product.specifications.battery}
                </div>
              </div>
              <div className="spec-row">
                <div className="spec-name">Trọng lượng</div>
                <div className="spec-value">
                  {product.specifications.weight}
                </div>
              </div>
              <div className="spec-row">
                <div className="spec-name">Kích thước</div>
                <div className="spec-value">
                  {product.specifications.dimensions}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="product-reviews">
            <h2>Đánh Giá Sản Phẩm</h2>
            <div className="review-summary">
              <div className="average-rating">
                <div className="big-rating">{calculateAverageRating()}</div>
                {renderStars(parseFloat(calculateAverageRating()))}
                <div className="total-reviews">{reviews.length} Đánh Giá</div>
              </div>
            </div>

            <div className="review-list">
              {isLoadingReviews ? (
                <div className="loading-reviews">Đang tải đánh giá...</div>
              ) : reviews.length === 0 ? (
                <div className="no-reviews">Chưa có đánh giá nào</div>
              ) : (
                reviews.map((review) => (
                  <div key={review.id} className="review-item">
                    <div className="review-header">
                      <div className="reviewer-name">{review.user}</div>
                      <div className="review-rating">
                        <div style={starStyles.container}>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              style={{
                                ...starStyles.star,
                                ...(star <= review.rating
                                  ? starStyles.selected
                                  : starStyles.unselected),
                                cursor: "default",
                              }}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
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
                ))
              )}
            </div>

            <div className="write-review">
              <h3>Viết đánh giá</h3>
              <div className="rating-input">
                <span style={{ marginRight: "10px" }}>Xếp hạng:</span>
                {renderRatingStars()}
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
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                }}
              ></textarea>
              <button
                className="submit-review-btn"
                onClick={handleSubmitReview}
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  backgroundColor: "#363636",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Gửi Đánh Giá
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
