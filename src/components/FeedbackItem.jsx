function FeedbackItem({ rating, ratingText }) {
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{ratingText}</div>
    </div>
  );
}

export default FeedbackItem;
