import React, { Component } from "react";
import axios from "../../axios-order";

import Order from "../../components/order/order";
import WithErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    axios
      .get("/order.json")
      .then((response) => {
        let orders = [];
        for (let key in response.data)
          orders.push({ ...response.data[key], id: key });
        this.setState({ orders, loading: false });
      })
      .catch((error) => this.setState({ loading: false }));
  }
  render() {
    return (
      <div>
        {this.state.orders.map((order) => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}

export default WithErrorHandler(Orders, axios);
