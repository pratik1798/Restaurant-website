import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    updateItems((prevItems) => {
      const havingSameId = prevItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      let updatedAmount;

      if (havingSameId !== -1) {
        const updatedCartItems = [...prevItems];
        const existingCartItem = updatedCartItems[havingSameId];
        existingCartItem.quantity += item.quantity;
        updatedAmount = totalAmount + item.quantity * item.price;
        setTotalAmount(updatedAmount);
        return updatedCartItems;
      } else {
        updatedAmount = totalAmount + item.quantity * item.price;
        setTotalAmount(updatedAmount);
        return [...prevItems, item];
      }
    });
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
