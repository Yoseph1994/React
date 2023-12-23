import { useState } from "react";

function StateExample() {
  const [name, setName] = useState("Josi");
  function onClickSetName() {
    setName("Someone");
  }
  return (
    <div>
      <p>StateExample, lets set a name changing effect</p>
      <button onClick={onClickSetName}>Hello, {name}</button>
    </div>
  );
}

export default StateExample;
