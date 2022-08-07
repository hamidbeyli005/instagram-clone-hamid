import styles from "scss/s.module.scss";

function Inbox() {
  return (
    <div className={styles.InboxNew}>
      <svg
        color="#262626"
        fill="#262626"
        height="96"
        role="img"
        viewBox="0 0 96 96"
        width="96"
      >
        <circle
          cx="48"
          cy="48"
          fill="none"
          r="47"
          stroke="currentColor"
          strokeWidth="2"
        ></circle>
        <line
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          x1="69.286"
          x2="41.447"
          y1="33.21"
          y2="48.804"
        ></line>
        <polygon
          fill="none"
          points="47.254 73.123 71.376 31.998 24.546 32.002 41.448 48.805 47.254 73.123"
          stroke="currentColor"
          strokeWidth="2"
        ></polygon>
      </svg>
      <h4>Your Messages</h4>
      <p>Send private photos and messages to a friend or group.</p>
      <button>Send Message</button>
    </div>
  );
}

export default Inbox;
