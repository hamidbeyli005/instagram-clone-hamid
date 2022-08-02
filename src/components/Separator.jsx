import styles from "../scss/Components.module.scss";

function Separator({label}) {
  return (
    <div className={styles.or}>
      <div></div>
      <span> {label}</span>
      <div> </div>
    </div>
  );
}

export default Separator;
