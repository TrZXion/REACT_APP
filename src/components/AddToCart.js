import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItemToCart, removeItemFromCart } from "../store/cart";

function AddToCart({ product }) {
  const dispatch = useDispatch();
  const itemInCart = useSelector((state) => state.cart.items[product.id]);
  // const cart = useSelector((state) => state.cart);
  // const itemInCart = cart.items[product.id];

  // console.log("Rendered", product.title);

  const handleAdd = useCallback(() => {
    dispatch(addItemToCart(product));
  }, [product]);

  const handleRemove = useCallback(() => {
    dispatch(removeItemFromCart(product));
  }, [product]);

  if (itemInCart) {
    return (
      <div className="product-control">
        <button className="product-add" onClick={handleRemove}>
          -
        </button>
        <div className="product-qty">{itemInCart.quantity}</div>
        <button className="product-add" onClick={handleAdd}>
          +
        </button>
      </div>
    );
  } else {
    return (
      <button onClick={handleAdd} className="product-add">
        Add to cart
      </button>
    );
  }
}

export default AddToCart;
