import classes from "./HeaderCartButton.module.css";

import React ,{ useContext,useEffect,useState } from "react";
import CartIcon from "../Cart/CartIcon";
import cartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [isBtnHighLighted, setisBtnHighLighted] = useState(false)
  const cartCtx = useContext(cartContext)
  const { items }=cartCtx

  const btnClasses =`${classes.button} ${isBtnHighLighted ? classes.bump:''}`

  useEffect(()=>{
    if(items.length===0){
      return;
    }
    setisBtnHighLighted(true)

    const timer = setTimeout(()=>{
      setisBtnHighLighted(false)
    },300)

    return ()=>{
      clearTimeout(timer)
    }
  },[items])

  const numberOfItems = items.reduce((curNum,item)=>{
    return curNum+item.amount
    //amount
  },0);
  
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
