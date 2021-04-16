import "./buildControls.css";
import BuildControl from "./buildControl/buildControl";

const BuildControls = ({
  label,
  onAdd,
  onRemove,
  purchasable,
  onPurchase,
  price,
}) => {
  let labels = Object.entries(label);
  labels = labels.map((label, i) => (
    <BuildControl
      key={i}
      label={<span style={{ textTransform: "capitalize" }}>{label[0]}</span>}
      type={label[0]}
      onAdd={() => onAdd(label[0])}
      onRemove={() => onRemove(label[0])}
      disabled={label[1] > 0 ? false : true}
    />
  ));

  return (
    <div className="BuildControls">
      <p>
        Current Price:<strong>{price.toFixed(2)}</strong>
      </p>
      {labels}
      <button
        className="OrderButton"
        disabled={!purchasable}
        onClick={onPurchase}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
