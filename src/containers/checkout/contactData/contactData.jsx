import React, { Component } from "react";
import axios from "../../../axios-order";
import { connect } from "react-redux";

import Button from "../../../components/ui/button/button";
import Spinner from "../../../components/ui/spinner/spinner";
import Input from "../../../components/ui/input/input";
import "./contactData.css";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: { type: "text", placeholder: "Your Name" },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
      street: {
        elementType: "input",
        elementConfig: { type: "text", placeholder: "Street" },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
      country: {
        elementType: "input",
        elementConfig: { type: "text", placeholder: "Country" },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
      zipcode: {
        elementType: "input",
        elementConfig: { type: "text", placeholder: "Zip Code" },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
      email: {
        elementType: "input",
        elementConfig: { type: "email", placeholder: "Email" },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "normal", displayValue: "Normal" },
          ],
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
      },
    },
    loading: false,
  };

  checkValidity = (value, rules) => {
    let isValid = false;
    if (rules.required) isValid = value.trim() !== "";
    return isValid;
  };

  handleOrder = (e) => {
    e.preventDefault();
    let formData = {};
    for (let formDataIdentifier in this.state.orderForm) {
      formData[formDataIdentifier] = this.state.orderForm[
        formDataIdentifier
      ].value;
    }
    let order = {
      orderData: formData,
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
    };
    axios
      .post("/order.json", order)
      .then((response) => {
        this.setState({ loading: false });
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
    this.props.history.push("/");
  };

  handleChange = (e, userIdentifier) => {
    let updatedForm = { ...this.state.orderForm };
    let updatedFormElement = { ...updatedForm[userIdentifier] };
    updatedFormElement.value = e.target.value;
    updatedForm[userIdentifier] = updatedFormElement;
    updatedForm.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    this.setState({ orderForm: updatedForm });
  };

  render() {
    let formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({ id: key, config: this.state.orderForm[key] });
    }
    return this.state.loading ? (
      <Spinner />
    ) : (
      <div className="ContactData">
        <h4>Enter your contact details</h4>
        <form onSubmit={this.handleOrder}>
          {formElementsArray.map((formElement) => (
            <Input
              key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              changed={(e) => this.handleChange(e, formElement.id)}
            />
          ))}
          <Button btnType="Success" clicked={this.handleOrder}>
            ORDER
          </Button>
        </form>
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

export default connect(mapStateToProps)(ContactData);
