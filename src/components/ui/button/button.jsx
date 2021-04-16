import "./button.css";

const Button = (props) => {
  return (
    <button
      className={`Button ${props.btnType}`}
      onClick={(e) => props.clicked(e)}
    >
      {props.children}
    </button>
  );
};

export default Button;
