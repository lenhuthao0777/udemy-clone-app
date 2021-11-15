import React, { useCallback } from "react";
import "../assets/DateFiled.scss";
function DatePicker({ fieldName, cb, label, value }) {
  const hdChange = useCallback((e) => {
    const { name, value } = e.target;
    cb({ name, value });
  }, [cb]);
  return (
    <div className="date-field">
      <label htmlFor="">{label}</label>
      <input type="date" name={fieldName} value={value} onChange={hdChange} />
    </div>
  );
}

export default DatePicker;
