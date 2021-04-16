import Logo from "../../logo/logo";
import NavigationItems from "../navigationItems/navigationItems";
import "./sideDrawer.css";

const SideDrawer = (props) => {
  return (
    <div className="SideDrawer">
      <Logo></Logo>
      <nav>
        <NavigationItems></NavigationItems>
      </nav>
    </div>
  );
};

export default SideDrawer;
