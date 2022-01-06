import React from "react";
import CartContext from "./cart-context";

const cardProvider = () => {
  const addItemHandler = (item) => {};

  const removeItemHandler = (id) => {};

  const cartContext = {
    item: [],
    amount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return <CartContext.Provider>{props.children}</CartContext.Provider>;
};

export default cardProvider;
