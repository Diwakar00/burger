import burgerLogo from "../../assets/images/burger-logo.png";
import "./logo.css";

const Logo = () => {
  return (
    <div className="Logo">
      <img src={burgerLogo} alt="burger" />
    </div>
  );
};

export default Logo;
