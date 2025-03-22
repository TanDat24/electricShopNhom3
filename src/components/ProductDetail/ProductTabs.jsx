import { useState } from "react";
import SpecificationsTab from "./SpecificationsTab";
import ReviewsTab from "./ReviewsTab";

const ProductTabs = ({ product }) => {
    const [activeTab, setActiveTab] = useState("specs");

    return (
        <div className="product-details-tabs">
            <div className="tabs-header">
                <button
                    className={`tab-button ${
                        activeTab === "specs" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("specs")}
                >
                    Thông Số Kỹ Thuật
                </button>
                <button
                    className={`tab-button ${
                        activeTab === "reviews" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("reviews")}
                >
                    Đánh Giá
                </button>
            </div>
            {activeTab === "specs" && (
                <SpecificationsTab specifications={product.specifications} />
            )}
            {activeTab === "reviews" && <ReviewsTab productId={product.id} />}
        </div>
    );
};

export default ProductTabs;
