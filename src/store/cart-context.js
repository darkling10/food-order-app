import React from "react";

const cartContext = React.createContext({
  item: [],
  amount: 0,
  addItem: (item) => {},
  deleteItem: (id) => {},
});

export default cartContext;
