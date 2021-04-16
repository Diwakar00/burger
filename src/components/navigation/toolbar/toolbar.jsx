import Logo from "../../logo/logo";
import NavigationItems from "../navigationItems/navigationItems";
import "./toolbar.css";

const Toolbar = (props) => {
  return (
    <header className="Toolbar">
      <div>MENU</div>
      <Logo></Logo>
      <nav>
        <NavigationItems></NavigationItems>
      </nav>
    </header>
  );
};

export default Toolbar;
