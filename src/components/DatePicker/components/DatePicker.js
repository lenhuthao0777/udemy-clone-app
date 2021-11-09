import React from "react";
function DatePicker({ fieldName, cb, label }) {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input type="date" name={fieldName} value={value} onChange={cb} />
    </div>
  );
}

export default DatePicker;
