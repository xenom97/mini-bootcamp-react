import PropTypes from "prop-types";
import "./index.css";

const BaseInput = ({ type = "text", ...props }) => {
  const renderTextarea = () => {
    return <textarea className="input-field" {...props} />;
  };

  const renderInput = () => {
    return <input className="input-field" {...props} type={type} />;
  };

  return type === "textarea" ? renderTextarea() : renderInput();
};

BaseInput.propTypes = {
  type: PropTypes.string,
};

export default BaseInput;
