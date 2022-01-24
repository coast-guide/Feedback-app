import Card from "./shared/Card";
import { useState, useContext } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const { addFeedback } = useContext(FeedbackContext);
  function handleTextChange(e) {
    const value = e.target.value;

    if (value === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (value !== "" && value.trim().length < 10) {
      setBtnDisabled(true);
      setMessage("Text must be atleast 10 characters.");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (text.trim().length >= 10) {
      const newFeedBack = {
        text: text,
        rating: rating,
      };

      addFeedback(newFeedBack);

      setText("");
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would rate your service with us?</h2>
        <RatingSelect selectedRating={(rating) => setRating(rating)} />

        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
