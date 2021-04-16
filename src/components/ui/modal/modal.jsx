import "./modal.css";
import Aux from "../../../hoc/auxuliry";
import Backdrop from "../backdrop/backdrop";

const Modal = ({ purchasing, children, cancel }) => {
  return (
    <Aux>
      <Backdrop show={purchasing} cancel={cancel}></Backdrop>
      <div className="Modal" style={{ display: purchasing ? "block" : "none" }}>
        {children}
      </div>
    </Aux>
  );
};

export default Modal;
