import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { useCart } from "../../../contexts/CartContext";
// import { useNavigate } from "react-router-dom";

const Product = ({ products = [] }) => {
  const INITIAL_VISIBLE = 12;
  const LOAD_MORE = 8;
  const [visibleProducts, setVisibleProducts] = useState(INITIAL_VISIBLE);
  //   const navigate = useNavigate();
  const productRef = useRef(null);
  const totalProducts = products.length;
  const isShowLoadMore = totalProducts > INITIAL_VISIBLE;
  const { addToCart } = useCart();

  const loadMore = () => {
    setVisibleProducts((prev) => prev + LOAD_MORE);
  };

  const resetProducts = () => {
    setVisibleProducts(INITIAL_VISIBLE);
    productRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!products || totalProducts === 0) {
    return <p className="text-center text-gray-500">Không có sản phẩm nào.</p>;
  }

  return (
    <div ref={productRef} className="w-4/5 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
        {products.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="text-center w-3/5 mx-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-2"
            />
            <h4 className="w-full">{product.name}</h4>
            <p className="text-gray-600 pt-2 py-4">
              {product.price.toLocaleString()} VND
            </p>
            <button
              className="mt-2 border-2 rounded-full px-4 py-1 hover:border-black hover:font-semibold transition"
              //   onClick={() => navigate(`product-detail/${product.id}`)}
              onClick={() => addToCart(product)}
            >
              Thêm giỏ hàng
            </button>
          </div>
        ))}
      </div>

      {isShowLoadMore && (
        <div className="flex justify-center mt-6">
          {visibleProducts < totalProducts ? (
            <button
              onClick={loadMore}
              className="text-blue-500 text-lg opacity-90 px-6 py-2 rounded-full hover:text-blue-800 transition"
            >
              + Xem thêm
            </button>
          ) : (
            <button
              onClick={resetProducts}
              className="text-blue-500 text-lg opacity-90 px-6 py-2 rounded-full hover:text-blue-800 transition"
            >
              - Ẩn bớt
            </button>
          )}
        </div>
      )}
    </div>
  );
};

Product.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Product;
