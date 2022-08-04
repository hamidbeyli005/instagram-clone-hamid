import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import s from "../scss/Components.module.scss";

function Search() {
  const [open, setOpen] = useState(false);

  return (
    <div className={s.Search}>
      {open === false ? (
        <div>
          <svg
            aria-label="Search"
            color="#8e8e8e"
            fill="#8e8e8e"
            height="16"
            role="img"
            viewBox="0 0 24 24"
            width="16"
          >
            <path
              d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            ></path>
            <line
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              x1="16.511"
              x2="22"
              y1="16.511"
              y2="22"
            ></line>
          </svg>
        </div>
      ) : null}

      <input
        style={open ? { paddingLeft: "15px", paddingRight: "27px" } : null}
        onBlur={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        type="text"
        placeholder="Search"
      />
      {open === true ? <AiFillCloseCircle /> : null}
    </div>
  );
}

export default Search;
