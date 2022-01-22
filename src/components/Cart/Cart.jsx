import React, { useContext, useState } from "react";
import cartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setisSubmitting] = useState(false);
  const [didSubmit, setdidSubmit] = useState(false);

  const cartCtx = useContext(cartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const onAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const checkoutHandler = () => {
    setIsCheckout(true);
  };

  const submitOrder = async (userdata) => {
    setisSubmitting(true);
    await fetch(
      "https://food-cart-app-4fccf-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          userDetails: userdata,
          orderItems: cartCtx.items,
        }),
      }
    );
    setisSubmitting(false);
    setdidSubmit(true);
    cartCtx.clearCart();
  };

  const cartitems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={onRemoveHandler.bind(null, item.id)}
          onAdd={onAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const buttonGrid = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClick}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={checkoutHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout
          onConfirm={submitOrder}
          isCheckout={isCheckout}
          onCancel={props.onClick}
        />
      )}
      {!isCheckout && buttonGrid}
    </React.Fragment>
  );

  const processModal = <p>Submitting your Order</p>

  const submitModal = <React.Fragment>
    <p>Your Order has been submitted</p>
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClick}>
        Close
      </button>
          </div>
  </React.Fragment>

  return <Modal onClick={props.onClick}>
    {!isSubmitting && !didSubmit && cartModalContent}
    {isSubmitting && !didSubmit && processModal}
    {!isSubmitting && didSubmit && submitModal}
  </Modal>;
};

export default Cart;
