import Header from "./components/Header";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";

function App() {
  let [feedback, setFeedback] = useState(FeedbackData);

  function deleteFeedback() {}

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} setFeedback={setFeedback} />
      </div>
    </>
  );
}

export default App;
