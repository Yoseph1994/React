function Progress({ numOfQuestions, index, totalNumOfPoints, points, answer }) {
  return (
    <header className="progress">
      <progress max={numOfQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/ {numOfQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{totalNumOfPoints}
      </p>
    </header>
  );
}

export default Progress;
