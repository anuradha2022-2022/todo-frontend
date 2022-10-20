import React from "react";
import "./display.css";

const Display = (props) => {
  return (
    <div className="row">
      <div className="container">
        <ul>
          <li>
            <p id="input">{props.input}</p>
          </li>

          <button
            id="button"
            onClick={ () => {
              props.onSelect(props.id);
            }}
          >
            X
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Display;
