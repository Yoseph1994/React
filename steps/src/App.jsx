import { useState } from "react";
import "./App.css";
function App() {
  const [handleClose, setHandleClose] = useState(true);
  const [handleCloseText, setHandleCloseText] = useState("Hide");
  function onSetChangeClose() {
    setHandleClose(!handleClose);
    setHandleCloseText(handleClose ? "Show" : "Hide");
  }

  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];
  return (
    <>
      <button onClick={onSetChangeClose} className="close">
        {handleCloseText}
      </button>
      {handleClose && (
        <div className="steps">
          <div className="numbers">
            <div className="step-1 active">1</div>
            <div className="step-2">2</div>
            <div className="step-3">3</div>
          </div>
          <p className="message">{messages[0]}</p>
          <div className="buttons">
            <button className="button previous">Previous</button>
            <button className="next">Next</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
