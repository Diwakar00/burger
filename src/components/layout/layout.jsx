import Aux from "../../hoc/auxuliry";
import Toolbar from "../navigation/toolbar/toolbar";
import SideDrawer from "../navigation/sidedrawer/sideDrawer";
import "./layout.css";

const Layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <SideDrawer />
      <main className="content">{props.children}</main>
    </Aux>
  );
};

export default Layout;
