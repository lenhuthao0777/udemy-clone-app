import React, { useCallback } from "react";
import "../assets/TextFIeld.scss";
function TextFileld({ fieldName, cb, label, value, placehd }) {
  const hdChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      cb({ name, value });
    },
    [cb]
  );
  return (
    <div className="text-field">
      <label htmlFor="">{label}</label>
      <input
        type="text"
        name={fieldName}
        placeholder={placehd}
        value={value}
        onChange={hdChange}
      />
    </div>
  );
}

export default TextFileld;
