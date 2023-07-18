import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import ShopContext from "../../context/shop-context";

import "./Cart.css";

const Cart = () => {
  const { getTotalCartAmount, cartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  const totalAmount = getTotalCartAmount();

  return (
    <div className="cart">
      {totalAmount > 0 ? (
        <>
          <div>
            <h1>
              <b>Your Cart Items</b>
            </h1>
          </div>
          <div className="cartItems">
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem data={product} />;
              }
            })}
          </div>
          <div className="checkout">
            <p> Subtotal: $ {totalAmount} </p>
            <button onClick={() => navigate("/")}> Continue Shopping </button>
            <button> Checkout </button>
          </div>
        </>
      ) : (
        <h1> Your Cart Is Empty </h1>
      )}
    </div>
  );
};

export default Cart;
