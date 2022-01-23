import PropTypes from "prop-types";

function FeedbackStats({ feedback }) {
  function getAverageRating() {
    if (feedback === null || feedback.length === 0) return 0;

    return (
      feedback.reduce((acc, curr) => acc + curr.rating, 0) / feedback.length
    )
      .toFixed(1)
      .replace(/[.,]0$/, "");
  }
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating : {getAverageRating()}</h4>
    </div>
  );
}
FeedbackStats.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackStats;
