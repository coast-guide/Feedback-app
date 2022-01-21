import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
function FeedbackList({ feedback, setFeedback }) {
  if (!feedback || feedback.length === 0) return <p>No feedback yet.</p>;

  function deleteHandler(id) {
    if (window.confirm("Are you sure you want to delete?"))
      setFeedback(feedback.filter((item) => item.id !== id));
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={deleteHandler} />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default FeedbackList;
