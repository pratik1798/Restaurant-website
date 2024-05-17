import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    updateItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      let updatedItems;
      let updatedAmount;

      if (existingItemIndex !== -1) {
        updatedItems = [...prevItems];
        const existingItem = updatedItems[existingItemIndex];
        existingItem.quantity += item.quantity;
      } else {
        updatedItems = [...prevItems, item];
      }

      updatedAmount = totalAmount + item.quantity * item.price;
      setTotalAmount(updatedAmount);

      return updatedItems;
    });
  };

  const removeItemFromCartHandler = (item) => {
    updateItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      let updatedItems;
      let updatedAmount;

      if (existingItemIndex !== -1) {
        const existingItem = prevItems[existingItemIndex];

        if (existingItem.quantity === 1) {
          updatedItems = prevItems.filter(
            (cartItem) => cartItem.id !== item.id
          );
        } else {
          updatedItems = [...prevItems];
          existingItem.quantity -= 1;
        }

        updatedAmount = totalAmount - item.price;
        setTotalAmount(updatedAmount);

        return updatedItems;
      }

      return prevItems;
    });
  };

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
