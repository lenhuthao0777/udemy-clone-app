import React from "react";
function FileFileld({ fieldName, cb, label }) {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input type="file" name={fieldName} value={value} onChange={cb} />
    </div>
  );
}

export default FileFileld;
