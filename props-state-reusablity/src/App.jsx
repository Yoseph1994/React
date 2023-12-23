import "./App.css";
import SayHello from "./SayHello";
import SayHelloDest from "./SayHelloDest";
import StateExample from "./StateExample";

function App() {
  const placeHolderName = "Josi";
  return (
    <div>
      <SayHello placeHolderName={placeHolderName} />
      <p>Lets, understand prop destructuring</p>
      <SayHelloDest placeHolderName={placeHolderName} />
      {/* <p>Lets Understand some state before easy project</p> */}
      <StateExample placeHolderName={placeHolderName} />
    </div>
  );
}

export default App;
