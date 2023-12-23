import "./App.css";
import Steps from "./Steps";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  return (
    <>
      <Steps messages={messages} />
    </>
  );
}

export default App;
