import React, { useCallback } from "react";
import "../assets/FileField.scss";
function FileFileld({ fieldName, cb, label, vl }) {
  const hdChange = useCallback(
    (e) => {
      const { name, files } = e.target;
      cb({ name, files });
    },
    [cb]
  );
  return (
    <div className="file-field">
      <label htmlFor="">{label}</label>
      <input type="file" name={fieldName} value={vl} onChange={hdChange} />
    </div>
  );
}

export default FileFileld;
