function FinishScreen({ points, totalNumOfPoints, dispatcher }) {
  const percentage = (points / totalNumOfPoints) * 100;

  let emoji;
  if (percentage >= 90) emoji = "🥇";
  if (percentage >= 80) emoji = "🥈";
  if (percentage >= 70) emoji = "🥉";
  if (percentage >= 55) emoji = "🙌";
  if (percentage < 55) emoji = "👎";

  return (
    <div>
      <p className="result">
        {emoji} You Scored <strong>{points}</strong> out of {totalNumOfPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatcher({ type: "restart" })}
      >
        Restart
      </button>
    </div>
  );
}

export default FinishScreen;
