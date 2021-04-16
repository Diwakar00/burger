import "./buildControl.css";

const BuildControl = (props) => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      <button
        className="Less"
        type={props.type}
        onClick={props.onRemove}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className="More" type={props.type} onClick={props.onAdd}>
        More
      </button>
    </div>
  );
};

export default BuildControl;
