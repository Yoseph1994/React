import { useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [handleClose, setHandleClose] = useState(true);
  const [handleCloseText, setHandleCloseText] = useState("Hide");
  const [step, setStep] = useState(0);
  function onSetChangeClose() {
    setHandleClose(!handleClose);
    setHandleCloseText(handleClose ? "Show" : "Hide");
  }

  function onNext() {
    setStep(step < messages.length ? step + 1 : 0);
  }

  function onPrevious() {
    setStep(step >= 0 ? step - 1 : 0);
  }
  return (
    <>
      <button onClick={onSetChangeClose} className="close">
        {handleCloseText}
      </button>
      {handleClose && (
        <div className="steps">
          <div className="numbers">
            <div className={`step-1 ${step === 0 ? "active" : ""}`}>1</div>
            <div className={`step-1 ${step === 1 ? "active" : ""}`}>2</div>
            <div className={`step-1 ${step === 2 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">{messages[step]}</p>
          <div className="buttons">
            <button className="button previous" onClick={onPrevious}>
              Previous
            </button>
            <button className="next" onClick={onNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
