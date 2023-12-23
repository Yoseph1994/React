import "./App.css";
import SayHello from "./SayHello";
import SayHelloDest from "./SayHelloDest";

function App() {
  return (
    <div>
      <p>Lets, understand props</p>
      <SayHello name="Josi" />
      <p>Lets, understand prop destructuring</p>
      <SayHelloDest name="Josi" />
    </div>
  );
}

export default App;
