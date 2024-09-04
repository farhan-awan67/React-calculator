import { useState } from "react";
import "./index.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";

function App() {
  const [calVal, setCalVal] = useState("");

  function onClick(event, buttonText) {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newVal = buttonText;
      let addVal = calVal + buttonText;
      setCalVal(addVal);
    }
  }

  return (
    <>
      <div className="w-full max-w-[352px] rounded-xl font-bold bg-black border-2 border-black px-2 py-1">
        <Display displayVal={calVal}></Display>
        <ButtonContainer onClick={onClick}></ButtonContainer>
      </div>
    </>
  );
}

export default App;
