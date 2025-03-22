const ProductInfo = ({
    product,
    quantity,
    setQuantity,
    selectedColor,
    setSelectedColor,
    setSelectedImage,
}) => {
    const handleColorChange = (color) => {
        setSelectedColor(color);
        setSelectedImage(product.images[color]);
    };

    const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);
    const increaseQuantity = () => setQuantity(quantity + 1);

    return (
        <div className="product-info">
            <div className="product-label">Yêu Thích</div>
            <h1 className="product-name">{product.name}</h1>
            <div className="product-stats">
                <div className="rating">
                    <span>{product.rating}</span>
                    <div className="stars">★★★★★</div>
                </div>
                <div className="reviews">{product.reviews} Đánh Giá</div>
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
                        {Object.keys(product.images).map((color) => (
                            <button
                                key={color}
                                onClick={() => handleColorChange(color)}
                                className={`color-option ${
                                    selectedColor === color ? "selected" : ""
                                }`}
                            >
                                Màu {color}
                            </button>
                        ))}
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
                        onChange={(e) =>
                            setQuantity(parseInt(e.target.value) || 1)
                        }
                        className="quantity-input"
                    />
                    <button onClick={increaseQuantity} className="quantity-btn">
                        +
                    </button>
                </div>
            </div>
            <div className="action-buttons">
                <button className="add-to-cart-btn">
                    <i className="cart-icon">🛒</i> Thêm Vào Giỏ Hàng
                </button>
                <button className="buy-now-btn">Mua Ngay</button>
            </div>
        </div>
    );
};

export default ProductInfo;
