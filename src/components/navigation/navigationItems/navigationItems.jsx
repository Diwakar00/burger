import NavigationItem from "./navigationItem/navigationItem";
import "./navigationItems.css";

const NavigationItems = (props) => {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/" exact>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
      {/* <NavigationItem link="/auth">Authenticate</NavigationItem> */}
    </ul>
  );
};

export default NavigationItems;
