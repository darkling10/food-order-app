import classes from "./HeaderCartButton.module.css";

import React ,{ useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import cartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(cartContext)

  const numberOfItems = cartCtx.item.reduce((curNum,item)=>{
    return curNum+item.amount
  },0);
  
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
