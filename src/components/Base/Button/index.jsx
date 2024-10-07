import PropTypes from "prop-types";
import "./index.css";

const BaseButton = ({ children, ...props }) => {
  return (
    <button className="base-button" type="button" {...props}>
      {children}
    </button>
  );
};

BaseButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseButton;
