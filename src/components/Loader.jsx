import React from "react";
import styles from "../scss/Components.module.scss";
import {BsInstagram}from "react-icons/bs"

function Loader() {
  return (
    <div className={styles.loader}>
      <BsInstagram ></BsInstagram>
      <h1>instagram</h1>
    </div>
  );
}

export default Loader;
