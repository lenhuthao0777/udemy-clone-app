import React, { useCallback } from "react";
import "../assets/FileField.scss";
function FileFileld({ fieldName, cb, label, value }) {
  const hdChange = useCallback((e) => {
    const { name, value } = e.target;
    cb({ name, value });
  }, [cb]);
  return (
    <div className="file-field">
      <label htmlFor="">{label}</label>
      <input type="file" name={fieldName} value={value} onChange={hdChange} />
    </div>
  );
}

export default FileFileld;
