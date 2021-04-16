import "./order.css";

const Order = (props) => {
  let ingredients = Object.entries(props.ingredients).map((keyValue) => (
    <span
      key={keyValue[0]}
      style={{
        textTransform: "capitalize",
        display: "inline-block",
        margin: "0 8px",
        border: "1px solid #ccc",
        padding: "5px",
      }}
    >
      {keyValue[0] + ": " + keyValue[1]}
    </span>
  ));

  return (
    <div className="Order">
      <p>Igredients:{ingredients}</p>
      <p>
        Price:<strong>USD {props.price}</strong>
      </p>
    </div>
  );
};

export default Order;
