const ProductGallery = ({
    images,
    selectedImage,
    // eslint-disable-next-line react/prop-types
    setSelectedImage,
    setSelectedColor,
}) => {
    const handleThumbnailClick = (img) => {
        setSelectedImage(img);
        const colorKey = Object.keys(images).find((key) => images[key] === img);
        if (colorKey) setSelectedColor(colorKey);
    };

    return (
        <div className="product-gallery">
            <div className="main-image">
                <img src={selectedImage} alt="Product" />
            </div>
            {/* <div className="thumbnail-row">
                {Object.values(images).map((img, index) => (
                    <div
                        key={index}
                        className={`thumbnail ${
                            img === selectedImage ? "active" : ""
                        }`}
                        onClick={() => handleThumbnailClick(img)}
                    >
                        <img src={img} alt={`Thumbnail ${index + 1}`} />
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default ProductGallery;
