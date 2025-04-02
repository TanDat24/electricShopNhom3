import { useNavigate } from "react-router-dom";
import { useCart } from "../../../contexts/CartContext";

const ShoppingCart = () => {
  const {
    cartItems,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const shipping = cartItems.length > 0 ? 50000 : 0;
  const tax = totalPrice * 0.08;
  const total = totalPrice + shipping + tax;
  const navigate = useNavigate();
  return (
    <div className="container mx-auto mt-16">
      <h2 className="text-3xl font-bold mb-6 pt-6 w-full">Giỏ hàng của bạn</h2>
      <span className="font-normal text-xl py-6">
        Bạn đang có {cartItems.length} sản phẩm trong giỏ hàng
      </span>
      <div className="flex flex-col lg:flex-row gap-16  pt-6">
        {/* Cart Items */}

        <div className="w-full lg:w-3/5 space-y-6">
          <div className="grid grid-cols-5 font-semibold text-gray-700 bg-gray-100 p-3 rounded-md">
            <span className="col-span-2 pl-2">Tên sản phẩm</span>
            <span className="pl-20 ml-5">Giá</span>
            <span className="pl-20 ml-6">Số lượng</span>
          </div>
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-center items-center border-b pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-full object-cover rounded-md mr-6"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-lg">{item.name}</h4>
                  <p className="text-sm text-green-500">In stock</p>
                </div>
                <div className="px-10">
                  <p className="pb-2 font-semibold">
                    {item.price * item.quantity} VND
                  </p>
                </div>
                <div className="flex items-center space-x-2 gap-1 px-10">
                  <button
                    onClick={() => decreaseQuantity(item.id, item.quantity - 1)}
                    className="p-2   rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14"
                      />
                    </svg>
                  </button>
                  <span className="text-lg font-medium">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id, item.quantity + 1)}
                    className="p-2 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-blue-500 hover:text-blue-700 ml-4 px-10"
                >
                  Xóa
                </button>
              </div>
            ))
          )}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-2/5 p-6 pb-4 border rounded-lg shadow-md bg-white h-fit">
          <h3 className="text-xl font-semibold mb-6">Thông tin đơn hàng</h3>
          <div className="flex justify-between mb-5 text-gray-700">
            <span>Tiền sản phẩm</span>
            <span>{totalPrice.toLocaleString()} VND</span>
          </div>
          <div className="flex justify-between mb-5 text-gray-700">
            <span>Phí vận chuyển</span>
            <span>{shipping.toLocaleString()} VND</span>
          </div>
          <div className="flex justify-between mb-5 text-gray-700">
            <span>Thuế (8%)</span>
            <span>{tax.toLocaleString()} VND</span>
          </div>
          <div className="flex justify-between font-semibold text-lg border-t py-6">
            <span>Tổng tiền</span>
            <span>{total.toLocaleString()} VND</span>
          </div>
          <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 text-lg font-semibold">
            Thanh toán
          </button>
          <div
            className="flex items-center justify-center gap-x-1 cursor-pointer mt-4 text-gray-500 underline text-sm hover:text-blue-600 transition"
            onClick={() => navigate("/vn/category")}
          >
            <span className="pt-0.5">Tiếp tục mua sắm</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
