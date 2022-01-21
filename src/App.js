import Header from "./components/Header";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
  let [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header text="Hello World" />
      <div className="container">
        <h1>My app</h1>
      </div>

      <FeedbackList feedback={feedback} />
    </>
  );
}

export default App;
