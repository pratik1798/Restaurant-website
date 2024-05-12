import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button class={classes.button}>
      <span class={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span class={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
