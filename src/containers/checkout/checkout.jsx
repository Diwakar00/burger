import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CheckoutSummary from "../../components/order/checkoutSummary";
import ContactData from "./contactData/contactData";

class Checkout extends Component {
  handleCheckoutCancel = () => {
    this.props.history.push("/");
  };

  handleCheckoutContinue = () => {
    this.props.history.push({
      pathname: "/checkout/contact-data",
      hash: this.props.location.hash,
    });
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.ingredients}
          checkoutCancel={this.handleCheckoutCancel}
          checkoutContinue={this.handleCheckoutContinue}
        ></CheckoutSummary>
        <Route
          path={this.props.match.path + `/contact-data`}
          render={(props) => <ContactData {...props} />}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
  };
};

export default connect(mapStateToProps, null)(Checkout);
