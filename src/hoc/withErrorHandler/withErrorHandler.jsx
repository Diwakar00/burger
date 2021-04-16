import React, { Component } from "react";

import Modal from "../../components/ui/modal/modal";
import Aux from "../auxuliry";

const WithErrorHandler = (WrappedComponent, axios) =>
  class UpdatedComponent extends Component {
    state = {
      error: null,
    };

    componentWillMount() {
      axios.interceptors.request.use();
      axios.interceptors.response.use(null, (error) =>
        this.setState({ error })
      );
    }

    handleBackdrop = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal purchasing={this.state.error} cancel={this.handleBackdrop}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };

export default WithErrorHandler;
