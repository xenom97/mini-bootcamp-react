import PropTypes from "prop-types";
import BaseButton from "../Button";

import "./index.css";

const BaseCard = ({ title, content, action, actionText }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div>{content}</div>

      <div className="card-footer">
        <BaseButton onClick={action} style={{ backgroundColor: "red" }}>
          {actionText}
        </BaseButton>
      </div>
    </div>
  );
};

BaseCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  action: PropTypes.func,
  actionText: PropTypes.string,
};

export default BaseCard;
