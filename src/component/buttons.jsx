import React from "react";
import css from "./button.module.css";
function ButtonContainer({ onButtonClick }) {
  const buttonNames = [
    "+",
    "1",
    "2",
    "3",
    ".",
    "4",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    "=",
    "/",
    "-",
    "0",
    "C",
  ];
  return (
    <div className={css.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button
          className={css.button}
          onClick={() => onButtonClick(buttonName)}
        >
          {" "}
          {buttonName}
        </button>
      ))}
    </div>
  );
}
export default ButtonContainer;
