import FeedbackItem from "./FeedbackItem";
function FeedbackList({ feedback }) {
  if (!feedback || feedback.length == 0) return <p>No feedback yet.</p>;

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          rating={item.rating}
          ratingText={item.text}
        />
      ))}
    </div>
  );
}

export default FeedbackList;
