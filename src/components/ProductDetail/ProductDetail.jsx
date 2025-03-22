import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";
import "./ProductDetail.css";

const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState("");

    const { productId } = useParams(); // Lấy productId từ URL
    const location = useLocation();
    const category = location.state?.category || "wearables"; // Mặc định là wearables

    useEffect(() => {
        // Debug để kiểm tra state và category
        console.log("Location state:", location.state);
        console.log("Category used:", category);

        const fetchProduct = async () => {
            try {
                const apiMap = {
                    wearables: `https://67d23e3290e0670699bcc2c3.mockapi.io/da/wearables/`,
                    laptops: `https://67d23e3290e0670699bcc2c3.mockapi.io/da/laptop/`,
                    tablets: `https://67dbd0561fd9e43fe476065f.mockapi.io/tablet/`,
                    audios: `https://67dbd0561fd9e43fe476065f.mockapi.io/audio/`,
                };

                const baseUrl = apiMap[category] || apiMap.wearables;
                const url = `${baseUrl}${productId}`;

                console.log("Fetching from:", url); // Debug URL

                const response = await fetch(url);
                if (!response.ok)
                    throw new Error(`HTTP error! Status: ${response.status}`);
                const data = await response.json();
                console.log("Product data:", data);
                setProduct(data);
                setSelectedImage(data.images.anh1);
            } catch (error) {
                console.error("Error fetching product:", error);
                setProduct(null);
            }
        };

        fetchProduct();
    }, [productId, category]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="product-detail-container">
            <p>{product.name}</p>
            <div className="product-content">
                {product.images && (
                    <ProductGallery
                        images={product.images.anh1}
                        selectedImage={selectedImage}
                        setSelectedImage={setSelectedImage}
                    />
                )}
                <ProductInfo
                    product={product}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    setSelectedImage={setSelectedImage}
                />
            </div>
            <ProductTabs product={product} />
        </div>
    );
};

export default ProductDetail;
