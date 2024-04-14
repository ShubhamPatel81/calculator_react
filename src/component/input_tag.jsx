import React from "react";
import css from "./input_teg.module.css";

function Display({ displayValue }) {
  return (
    <input type="text" className={css.display} value={displayValue} readOnly />
  );
}
export default Display;
