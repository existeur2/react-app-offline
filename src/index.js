import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import OfflineLayout from "./components/OfflineLayout";
import "./styles.css";

const OfflineConfigComponent = ({
  isOffline = true,
  root = "root",
  customLayout,
  children
}) => {
  if (isOffline) {
    ReactDOM.unmountComponentAtNode(document.getElementById(root));
    ReactDOM.render(
      customLayout ? customLayout : <OfflineLayout>{children}</OfflineLayout>,
      document.getElementById(root)
    );
  }
  return null;
};

OfflineConfigComponent.propTypes = {
  isOffline: PropTypes.bool.isRequired,
  root: PropTypes.string,
  customLayout: PropTypes.object,
  children: PropTypes.any
};

export default OfflineConfigComponent;
