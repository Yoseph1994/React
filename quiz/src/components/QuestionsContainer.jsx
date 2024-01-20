import Options from "./Options";

function QuestionsContainer({ question, dispatcher, answer }) {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatcher={dispatcher} answer={answer} />
    </div>
  );
}

export default QuestionsContainer;
