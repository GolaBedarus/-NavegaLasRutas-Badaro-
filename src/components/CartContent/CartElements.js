import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./CartContent.css";

import CartitemCounter from "./CartitemCounter";

const CartElements = () => {
const {cart, setCart} = useContext(dataContext);

const deleteProduct = (id)=> {

  const foundId = cart.find((element)=> element.id === id);

  const newCart = cart.filter((element)=> {
    return element !== foundId;
  });

  setCart(newCart);

};
  return cart.map((product)=>{
    return (
        <div className="cartContent" key={product.id}>
            <img src={product.img} alt="product-card"></img>
            <h3 className="name">{product.name}</h3>
            <CartitemCounter product={product} ></CartitemCounter>
            <h4 className="price">{product.price * product.quanty}$</h4>
            <h3 className="card-delete-button" onClick={()=> deleteProduct(product.id)}>❌</h3>
        </div>
    )
  })
}

export default CartElements
