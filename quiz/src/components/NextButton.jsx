function NextButton({ dispatcher, answer, index, numOfQuestions }) {
  if (answer === null) return null;
  if (index < numOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatcher({ type: "next" })}
      >
        Next
      </button>
    );
  if (index === numOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatcher({ type: "finished" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
