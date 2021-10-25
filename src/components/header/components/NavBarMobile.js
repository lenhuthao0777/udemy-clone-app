import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UdeAvatar from "components/avatar";
import avatar from "assets/images/avatar1.jpg"
function NavBarMobile({ SideBar, setSideBar }) {
  const { userInfo } = useSelector((state) => state.authReducer);
  return (
    <>
      <div className="header-navbar--mobile">
        <div className={`side-bar ${SideBar ? "active" : ""}`}>
          <div
            className={`side-bar__button-click ${SideBar ? "active" : ""}`}
            onClick={() => setSideBar(false)}
          >
            <div className="side-bar__button-click-close">
              <button>
                <GrFormClose className="close-icon" />
              </button>
            </div>
          </div>
          <div className="side-bar__menu">
            <div className="side-bar__menu-profile">
              <ul className="side-bar__menu-profile__list">
                {userInfo ? (
                  <li>
                    <button>
                      <div className="profile-img">
                        <UdeAvatar
                          AvatarSrc={avatar}
                          size="AvatarMd"
                        />
                      </div>
                      <div className="profile-user__name">
                        {userInfo ? (
                          <p className="user-name">Hello, {userInfo.hoTen}</p>
                        ) : (
                          <p className="user-name">Hello</p>
                        )}
                        <p className="welcome">Welcome</p>
                      </div>
                      <KeyboardArrowRightIcon className="iconRightProfile" />
                    </button>
                  </li>
                ) : (
                  <li>
                    <p
                      className="side-bar__login"
                      onClick={() => setSideBar(!SideBar)}
                    >
                      <Link to="/login">Login</Link>
                    </p>
                    <p
                      className="side-bar__signup"
                      onClick={() => setSideBar(!SideBar)}
                    >
                      <Link to="/signup">Sign Up</Link>
                    </p>
                  </li>
                )}
              </ul>
            </div>
            <div className="side-bar__menu-heading">
              <h3>Learn</h3>
            </div>
            <div className="side-bar__menu-learning">
              <ul>
                <li>
                  <Link to="/">My learning</Link>
                </li>
              </ul>
            </div>
            <ul className="side-bar__menu-list">
              <li
                className="side-bar__menu-list--item"
                onClick={() => setSideBar(!SideBar)}
              >
                <Link to="/courses/FronTend">FontEnd</Link>
              </li>
              <li
                className="side-bar__menu-list--item"
                onClick={() => setSideBar(!SideBar)}
              >
                <Link to="/courses/BackEnd">BackEnd</Link>
              </li>
              <li
                className="side-bar__menu-list--item"
                onClick={() => setSideBar(!SideBar)}
              >
                <Link to="/courses/DiDong">Mobile</Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`side-bar__overlay ${SideBar ? "active" : ""}`}
          onClick={() => setSideBar(false)}
        ></div>
      </div>
    </>
  );
}

export default NavBarMobile;
