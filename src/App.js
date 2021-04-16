import { Route, Switch } from "react-router-dom";

import Layout from "./components/layout/layout";
import BurgerBuilder from "./containers/burgerBuilder/burgerBuilder";
import Checkout from "./containers/checkout/checkout";
import Orders from "./containers/orders/orders";
import Auth from "./containers/auth/auth";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/auth" component={Auth} />
          <Route path="/" render={(props) => <BurgerBuilder {...props} />} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
