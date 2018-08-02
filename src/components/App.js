import React from "react";
import PropTypes from "prop-types";
import Test from "./Test";

const App = () => (
  <div className="main-wrapper">
    <Test />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;