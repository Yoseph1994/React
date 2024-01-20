import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import MainView from "./components/MainView";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import QuestionsContainer from "./components/QuestionsContainer";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
const initialState = {
  questions: [],
  // loading, error , ready , active , finished, restart
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "receivedData":
      return { ...state, questions: action.payload, status: "ready" };
    case "failedData":
      return { ...state, status: "error" };

    case "start":
      return { ...state, status: "active" };

    case "userAnswer":
      const currentQuestion = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === currentQuestion.correctOption
            ? state.points + currentQuestion.points
            : state.points,
      };

    case "next":
      return { ...state, index: state.index + 1, answer: null };
    case "finished":
      return { ...state, status: "finished" };
    case "restart":
      return { ...initialState, status: "ready", questions: state.questions };
    default:
      throw new Error("Unknown action");
  }
}

function App() {
  const [{ questions, status, index, answer, points }, dispatcher] = useReducer(
    reducer,
    initialState
  );
  //drived state to calculate NumOfQuestions
  const numOfQuestions = questions.length;
  const totalNumOfPoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        console.log(data);
        dispatcher({ type: "receivedData", payload: data });
      } catch (err) {
        dispatcher({ type: "failedData" });
      }
    }
    fetchQuestions();
  }, []);
  return (
    <div className="app">
      <Header />
      <MainView>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen
            numOfQuestions={numOfQuestions}
            dispatcher={dispatcher}
          />
        )}

        {status === "active" && (
          <>
            <Progress
              numOfQuestions={numOfQuestions}
              index={index}
              totalNumOfPoints={totalNumOfPoints}
              points={points}
              answer={answer}
            />
            <QuestionsContainer
              question={questions[index]}
              dispatcher={dispatcher}
              answer={answer}
            />
            <NextButton
              className="btn btn-next"
              dispatcher={dispatcher}
              answer={answer}
              index={index}
              numOfQuestions={numOfQuestions}
            />
          </>
        )}

        {status === "finished" && (
          <FinishScreen
            points={points}
            totalNumOfPoints={totalNumOfPoints}
            dispatcher={dispatcher}
          />
        )}
      </MainView>
    </div>
  );
}

export default App;
