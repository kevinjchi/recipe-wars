import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import LoginForm from "../forms/LoginForm";
import { login } from "../../actions/auth";
class LoginPage extends React.Component {
  // submit = data => {
  //   //push to homepage
  //   this.props.login(data).then(() => this.props.history.push("/"));
  // };
  submit = data => { return this.props.login(data).then(() => this.props.history.push("/dashboard")); } 

  render() {
    return (
      <div>
        <h1> Login page </h1>
        <Link to="/login"> login </Link>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(
  null,
  { login }
)(LoginPage);