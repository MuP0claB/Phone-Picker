import { useContext } from "react";
import ShopContext from "../../context/shop-context";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  const { cartItems, addToCart } = useContext(ShopContext);

  const cartItemsAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt="Not Available" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
      </button>
    </div>
  );
};

export default Product;
