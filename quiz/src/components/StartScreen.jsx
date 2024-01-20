function StartScreen({ numOfQuestions, dispatcher }) {
  return (
    <div className="start">
      <h2>Welcome, to REACT QUIZ</h2>
      <h3>{numOfQuestions} Questions to test your react knowledge</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatcher({ type: "start" })}
      >
        Start
      </button>
    </div>
  );
}

export default StartScreen;
