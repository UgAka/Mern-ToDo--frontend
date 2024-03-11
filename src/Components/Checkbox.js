import React, { useState } from "react";
import "../index.css";
const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  const checkCheckBox = () => {
    setChecked(!checked);
  };
  return (
    <div className={`teni $ {checked ? 'checked' : 'unchecked'}`}>
      <input
         type="checkbox" 
         checked={checked} 
         onChange={checkCheckBox} 
     />
    </div>
  );
};

export default Checkbox;
