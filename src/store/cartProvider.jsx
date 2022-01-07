import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedAmount=state.totalAmount+action.item.price*action.item.amount;
      const existingCartItemIndex = state.items.findIndex((item)=>item.id === action.item.id)

      const existingCartItem = state.items[existingCartItemIndex]
      let updatedItems;
      if(existingCartItem){
        const updatedItem ={
          ...existingCartItem,
          amount:existingCartItem.amount+action.item.amount
        }

        updatedItems=[...state.items]
        updatedItems[existingCartItemIndex]=updatedItem
      }else{
        updatedItems=state.items.concat(action.item)
      }

      return {
        items:updatedItems,
        totalAmount:updatedAmount
      }
      

    case "REMOVE":
      break;

      default:
        break;
    
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {};

  const cartContext = {
    item: cartState.items,
    amount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
