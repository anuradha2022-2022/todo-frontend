import React from "react";
import "./Display.css";

 const Display = (props) => {
  return (
    <div className="Row">
      <div className="Column1">
        <ul>
          <li>
            <p id="Rows">{props.input}</p>
          </li>

          <button
            id="buttons"
            onClick={() => {
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
export default Display


