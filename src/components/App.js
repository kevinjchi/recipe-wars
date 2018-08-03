import React from "react";
import PropTypes from "prop-types";
import FooterBar from "./footer/FooterBar"
import MainContent from "./MainContent";
import NavBar from "./topnav/NavBar";
import "../css/main.css";

const App = () => (
  <div className="content">
    <NavBar />
    <MainContent />
    <FooterBar />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;