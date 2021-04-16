import React, { Component } from "react";
import axios from "../../axios-order";
import { connect } from "react-redux";

import Aux from "../../hoc/auxuliry";
import Burger from "../../components/burger/burger";
import BuildControls from "../../components/burger/buildControls/buildControls";
import Modal from "../../components/ui/modal/modal";
import OrderSummary from "../../components/burger/orderSummary/orderSummary";
import Spinner from "../../components/ui/spinner/spinner";
import WithErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as action from "../../redux/reducer";

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    loading: true,
    error: null,
  };

  componentDidMount() {
    axios
      .get("https://social-app-1aaab.firebaseio.com/ingredients.json")
      .then((response) => {
        this.setState({ ingredients: response.data, loading: false });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  updatePurchasable = () =>
    Object.values(this.props.ingredients).some((value) => value > 0);

  handlePurchase = () => {
    this.setState({ purchasing: true });
  };

  handleOrderCancel = () => {
    this.setState({ purchasing: false });
  };

  handleOrderContinue = () => {
    this.props.history.push({
      pathname: "/checkout",
    });
  };

  render() {
    if (this.state.error) {
      return <p>Please try after sometime</p>;
    } else
      return this.state.loading ? (
        <Spinner />
      ) : (
        <Aux>
          <Modal
            purchasing={this.state.purchasing}
            cancel={this.handleOrderCancel}
          >
            {this.state.loading ? (
              <Spinner />
            ) : (
              <OrderSummary
                ingredients={this.props.ingredients}
                handleOrderCancel={this.handleOrderCancel}
                handleOrderContinue={this.handleOrderContinue}
                totalPrice={this.props.totalPrice}
              />
            )}
          </Modal>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            label={this.props.ingredients}
            onAdd={this.props.addIngredients}
            onRemove={this.props.removeIngredients}
            price={this.props.totalPrice}
            purchasable={this.updatePurchasable()}
            onPurchase={this.handlePurchase}
          />
        </Aux>
      );
  }
}

let mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    totalPrice: state.totalPrice,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addIngredients: (ingredient) => dispatch(action.addIngredients(ingredient)),
    removeIngredients: (ingredient) =>
      dispatch(action.removeIngredients(ingredient)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithErrorHandler(BurgerBuilder, axios));
