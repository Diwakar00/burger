import "./navigationItem.css";
import { NavLink } from "react-router-dom";

const NavigationItem = (props) => {
  return (
    <li className="NavigationItem">
      <NavLink to={props.link} activeClassName="active" exact={props.exact}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
