import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartElements from "./CartElements"
import CartTotal from "./CartTotal"
import Navbar from "../Navbar/Navbar";

const CartContent = () => {
    const {cart} = useContext(dataContext);

    return (
      <>
      <Navbar></Navbar>
      {cart.length > 0 ? (
        <>
        
        <CartElements></CartElements>
        <CartTotal></CartTotal>
        </>
      ) : (
        <h2 className="cart-message-center">Your cart is empty</h2>
      )}
      </>
    );

};




export default CartContent
