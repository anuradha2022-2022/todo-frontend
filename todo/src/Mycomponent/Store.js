import React, { useState } from "react";
import Display from "./Display";
import "./store.css";

const Store = () => {
  // to take input in input area
  const [input, setInput] = useState("");
  //to store the input entered by user in an empty array
  const [enteredInput, storeInput] = useState([]);

  const onChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    //to avoid page from reloading
    event.preventDefault();

    storeInput([...enteredInput, input]); // this ...enteredInput is holding new data and new data

    setInput(""); //after adding the input should be blank.
  };
  const deleteItem = (a) => {
    const finalData = enteredInput.filter((curEle, index) => {
      return index != a;
    });
    storeInput(finalData);
  };

  return (
    <div className="body">
      <div className="box">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter your todo"
            className="task-input"
            value={input}
            required
            onChange={onChangeHandler}
          />
          <button id="add-me" type="submit">
            {" "}
            ADD{" "}
          </button>
        </form>
        {/* we are using map method with an array */}

        {enteredInput.map((value, index) => {
          return (
            <Display
              key={index}
              id={index}
              input={value}
              onSelect={deleteItem}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Store;
