import Card from "./shared/Card";
import PropTypes from "prop-types";
function FeedbackItem({ rating, ratingText }) {
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <div className="text-display">{ratingText}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  rating: PropTypes.number.isRequired,
  ratingText: PropTypes.string.isRequired,
};

export default FeedbackItem;
