import { useEffect } from "react";
import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cartItems, setCartItems] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (id) => {
    console.log("Tăng số lượng sản phẩm:", id);
    setCartItems((prev) =>
      prev.map((item) =>
        String(item.id) === String(id)
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        String(item.id) === String(id)
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const addToCart = (product) => {
    setCartItems((prev) => {
      console.log("Sản phẩm được thêm:", product); // Kiểm tra sản phẩm trước khi thêm vào giỏ hàng
      const existingItem = prev.find(
        (item) => String(item.id) === String(product.id)
      );
      if (existingItem) {
        alert("Sản phẩm đã được thêm vào giỏ hàng");
        return prev.map((item) =>
          String(item.id) === String(product.id)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      console.log("Sản phẩm mới, thêm vào giỏ hàng.");
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => String(item.id) !== String(id))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        totalPrice,
        increaseQuantity,
        decreaseQuantity,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
