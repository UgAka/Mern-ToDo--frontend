import React, { useState } from "react";
import "../index.css";

const ToDo = ({ text, updateMode, deleteToDo }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`todo ${isChecked ? "checked" : ""}`}>
      <div className="myCheckBox">
        <input
          type="checkbox"
          name="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="text">{text}</div>
      <div className="icons">
        <button type="button" className="editBtn" onClick={updateMode}>
          Edit
        </button>
        <button type="button" className="deleteBtn" onClick={deleteToDo}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDo;
