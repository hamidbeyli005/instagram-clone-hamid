import { NavLink } from "react-router-dom";
import styles from "scss/Components.module.scss";

function Header({ user }) {
  return (
    <div className={styles.Header}>
      <div className={styles.top}>
        <div>
          <img
            height={150}
            width={150}
            style={{ borderRadius: "50%" }}
            src="./images/main/no_person.jpg"
            alt=""
          />
        </div>
        <div>
          <h2 className={styles.username}>{user.username} </h2>
          <ul>
            <li>{user.posts} posts</li>
            <li>{user.followers.length} followers</li>
            <li>{user.following.length} following</li>
          </ul>
          <h3 className={styles.fullname}>{user.fullname} </h3>
        </div>
      </div>
      <div className={styles.bottom}>
        <NavLink
          end={true}
          to={`/${user.username}`}
          className={({ isActive }) => {
            if (isActive === true) {
              return styles.active;
            }
          }}
        >
          <svg
            aria-label=""
            color="#262626"
            fill="#262626"
            height="12"
            role="img"
            viewBox="0 0 24 24"
            width="12"
          >
            <rect
              fill="none"
              height="18"
              stroke="currentColor"
              strokeWidth="2"
              width="18"
              x="3"
              y="3"
            ></rect>
            <line
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              x1="9.015"
              x2="9.015"
              y1="3"
              y2="21"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              x1="14.985"
              x2="14.985"
              y1="3"
              y2="21"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              x1="21"
              x2="3"
              y1="9.015"
              y2="9.015"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              x1="21"
              x2="3"
              y1="14.985"
              y2="14.985"
            ></line>
          </svg>
          POSTS
        </NavLink>
        <NavLink
          to={`/${user.username}/tagged`}
          className={({ isActive }) => {
            if (isActive === true) {
              return styles.active;
            }
          }}
        >
          <svg
            aria-label=""
            color="#8e8e8e"
            fill="#8e8e8e"
            height="12"
            role="img"
            viewBox="0 0 24 24"
            width="12"
          >
            <path
              d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            ></path>
            <path
              d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            ></path>
            <circle
              cx="12.072"
              cy="11.075"
              fill="none"
              r="3.556"
              stroke="currentColor"
              strokeWidth="2"
            ></circle>
          </svg>
          TAGGED
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
