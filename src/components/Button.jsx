import React from "react";
import s from "../scss/Components.module.scss";

function Button({ children ,...props}) {
  return (
    <div className={s.btn}>
      <button {...props}>
        {children}
      </button>
    </div>
  );
}

export default Button;
