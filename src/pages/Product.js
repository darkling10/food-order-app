import React, { useState } from "react";
import Cart from '../components/Cart/Cart'
import Header from "../components/Layout/Header";
import Meals from "../components/Meals/Meals";
import CartProvider from "../store/cartProvider";

const Product = () => {
  const [isVisible, setisVisible] = useState(false);

  const cartVisiblityHandler = () => {
    setisVisible(!isVisible);
  };
  return (
    <CartProvider>
      {isVisible && <Cart onClick={cartVisiblityHandler}></Cart>}
      <Header onClick={cartVisiblityHandler} showButton={true}></Header>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default Product;
