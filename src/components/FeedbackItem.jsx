import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
function FeedbackItem({ item }) {
  const { deleteFeedback } = useContext(FeedbackContext);

  function clickHandler() {
    deleteFeedback(item.id);
  }

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={clickHandler} className="close">
        <FaTimes color="purple" />
      </button>

      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
