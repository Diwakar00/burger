import Burger from "../burger/burger";
import Button from "../ui/button/button";

import "./checkoutSummary.css";

const CheckoutSummary = (props) => {
  return (
    <div className="checkoutSummary">
      <h1>we hope it tastes well</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button clicked={props.checkoutCancel} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.checkoutContinue} btnType="Success">
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
