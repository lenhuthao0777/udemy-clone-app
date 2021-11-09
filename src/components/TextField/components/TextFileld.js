import React from "react";
function TextFileld({ fieldName, cb, label }) {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input type="text" name={fieldName} value={value} onChange={cb} />
    </div>
  );
}

export default TextFileld;
