import { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = (item) => {
    cartCtx.addItem({
      ...item,
      quantity: 1,
    });
  };

  const removeItemHandler = (item) => {
    cartCtx.removeItem(item);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li key={item.id} className={classes["cart-item"]}>
          <div>
            <h2>{item.name}</h2>
            <div className={classes.summary}>
              <span className={classes.price}>{item.price}</span>
              <span className={classes.quantity}>x {item.quantity}</span>
            </div>
          </div>
          <div className={classes.action}>
            <button onClick={removeItemHandler.bind(null, item)}>−</button>
            <button onClick={addItemHandler.bind(null, item)} item={item}>
              +
            </button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total</span>
        <span>{cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
