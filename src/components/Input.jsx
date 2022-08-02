import React from "react";
import styles from "../scss/Components.module.scss";
import { useField } from "formik";

function Input({ show, label, setShow, value, ...props }) {
  const [field] = useField(props);

  return (
    <label>
      <input
        value={value}
        style={
          value
            ? {
                fontSize: "12px",
                lineHeight: "21px",
                paddingTop: "14px",
              }
            : null
        }
        {...field}
        {...props}
      />
      <small style={value ? { top: "4px", fontSize: "10px" } : null}>
        {label}
      </small>
      {show ? (
        <div onClick={setShow} className={styles.hide}>
          {value.length > 0 ? show : null}
        </div>
      ) : null}
    </label>
  );
}

export default Input;
