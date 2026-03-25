import React from "react";
import { Link } from "react-router-dom";

function HeaderLogo() {
  return (
    <div className="header--navbar__logo">
      <Link to="/">
        <img
          src="https://logodownload.org/wp-content/uploads/2019/07/udemy-logo.png"
          alt=""
        />
      </Link>
    </div>
  );
}

export default HeaderLogo;
