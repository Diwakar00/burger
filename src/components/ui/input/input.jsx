import "./input.css";

const Input = (props) => {
  let ele = null;
  switch (props.elementType) {
    case "input":
      ele = (
        <input
          onChange={props.changed}
          className="InputElement"
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
    case "textarea":
      <textarea
        onChange={props.changed}
        className="InputElement"
        {...props.elementConfig}
        value={props.value}
      />;
      break;
    case "select":
      ele = (
        <select
          onChange={props.changed}
          className="InputElement"
          {...props.elementConfig}
          value={props.value}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      ele = (
        <input
          onChange={props.changed}
          className="InputElement"
          {...props.elementConfig}
          value={props.value}
        />
      );
  }
  return (
    <div className="Input">
      <label className="Label">{props.label}</label>
      {ele}
    </div>
  );
};

export default Input;
