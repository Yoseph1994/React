import "./App.css";

function App() {
  return (
    <>
      <button>X</button>
      <div className="steps">
        <div className="numbers">
          <div className="step-1">1</div>
          <div className="step-2">2</div>
          <div className="step-3">3</div>
        </div>
        <p className="message"></p>
        <div className="buttons">
          <button className="previous">Previous</button>
          <button className="next">Next</button>
        </div>
      </div>
    </>
  );
}

export default App;
