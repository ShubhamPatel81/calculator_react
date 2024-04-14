import React, { useState } from "react";
import Display from "./component/input_tag";
import ButtonContainer from "./component/buttons";
import "bootstrap/dist/css/bootstrap.min.css";
import css from "./App.module.css";

function App() {
  const [calValue, setVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setVal("");
    } else if (buttonText === "=") {
      if (isNaN(eval(calValue))) alert("Error! Please enter number!");
      else {
        const result = eval(calValue);
        setVal(result);
      }
    } else {
      const newDisplayValue = calValue + buttonText;
      setVal(newDisplayValue);
    }
  };
  return (
    <center>
      <div className={css.calculator}>
        <Display displayValue={calValue}></Display>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </center>
  );
}

export default App;
