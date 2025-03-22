import { useCart } from "../../../contexts/CartContext";
import { useState } from "react";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    note: "",
  });

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 50000;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleInputChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleCheckout = async () => {
    const orderData = {
      customer,
      items: cartItems,
      total,
      date: new Date().toISOString(),
    };

    try {
      const response = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert("Đặt hàng thành công!");
        clearCart();
      } else {
        alert("Đặt hàng thất bại!");
      }
    } catch (error) {
      console.error("Lỗi:", error);
      alert("Lỗi khi gửi đơn hàng!");
    }
  };

  return (
    <div className="container mx-auto mt-16">
      <h2 className="text-3xl font-bold mb-6 py-6 w-full">
        Shopping Cart
        <span className="font-normal pl-3 text-2xl">
          ({cartItems.length} items)
        </span>
      </h2>
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Form Thanh Toán */}
        <div className="w-full lg:w-2/5 p-6 border rounded-lg shadow-md bg-white">
          <h3 className="text-xl font-semibold mb-4">Thông tin khách hàng</h3>
          <input
            type="text"
            name="name"
            placeholder="Tên khách hàng"
            value={customer.name}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Số điện thoại"
            value={customer.phone}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="text"
            name="address"
            placeholder="Địa chỉ giao hàng"
            value={customer.address}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <textarea
            name="note"
            placeholder="Ghi chú (nếu có)"
            value={customer.note}
            onChange={handleInputChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <div className="flex justify-between font-semibold text-lg border-t pt-3">
            <span>Total</span>
            <span>{total.toLocaleString()} VND</span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 text-lg font-semibold"
          >
            Thanh Toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
