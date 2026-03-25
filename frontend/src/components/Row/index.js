import React from "react";

function Row({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>{children}</div>
  );
}

export default Row;
