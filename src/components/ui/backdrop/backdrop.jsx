import "./backdrop.css";

const BackDrop = ({ show, cancel }) => {
  return (
    <div
      className="Backdrop"
      style={{ display: show ? "block" : "none" }}
      onClick={cancel}
    ></div>
  );
};

export default BackDrop;
