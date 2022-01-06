import { Fragment,useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isVisible, setisVisible] = useState(false)

  const cartVisiblityHandler =()=>{
    setisVisible(!isVisible)
  }

  return (
    <Fragment>
      {isVisible && <Cart onClick={cartVisiblityHandler}></Cart>}
      <Header onClick={cartVisiblityHandler}></Header>
      <main><Meals/></main>
    </Fragment>
  );
}

export default App;
