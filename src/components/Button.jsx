import React from "react";
import s from "../scss/Components.module.scss";

function Button({ label ,...props}) {
  return (
    <div className={s.btn}>
      <button {...props}>{label}</button>
    </div>
  );
}

export default Button;
