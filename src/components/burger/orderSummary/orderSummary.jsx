import Aux from "../../../hoc/auxuliry";
import Button from "../../ui/button/button";

const OrderSummary = (props) => {
  let ingredientSummary = Object.entries(props.ingredients).map(
    (ingredient) => (
      <li key={ingredient}>
        <span style={{ textTransform: "capitalize" }}>{ingredient[0]}</span>:{" "}
        {ingredient[1]}
      </li>
    )
  );
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A Delicious Burger with following Ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price:{props.totalPrice.toFixed(2)}</strong>
      </p>
      <p>Countinue to Checkout?</p>
      <Button btnType="Danger" clicked={props.handleOrderCancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.handleOrderContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
