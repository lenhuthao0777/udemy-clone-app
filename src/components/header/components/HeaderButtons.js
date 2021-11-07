import UdeAvatar from "components/avatar";
import { Button } from "components/button";
import React from "react";
import { Link } from "react-router-dom";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import avatar from "assets/images/avatar1.jpg";
import { useSelector } from "react-redux";

function HeaderButtons() {
  const { userInfo } = useSelector((state) => state.authReducer);
  const logout = () => {
    localStorage.removeItem("userInfo");
    window.location.reload();
  };
  return (
    <div className="buttons">
      {userInfo ? (
        <div className="user-navbar">
          <div className="user-navbar__content">
            <UdeAvatar size="AvatarSm" AvatarSrc={avatar} />
            <div className="user-navbar__hover">
              <ul>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li onClick={logout}>Log out</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="header--navbar__login">
            <Link to="/login">
              <Button type="button" color="btn--btn-outline" size="md">
                Log in
              </Button>
            </Link>
          </div>
          <div className="header--navbar__register">
            <Link to="/signup">
              <Button type="button" color="btn--btn-primary" size="md">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      )}
      <div className="header--navbar__language">
        <Button type="button" color="btn--outline-no-hover" size="sm">
          <LanguageOutlinedIcon />
        </Button>
      </div>
    </div>
  );
}

export default HeaderButtons;
