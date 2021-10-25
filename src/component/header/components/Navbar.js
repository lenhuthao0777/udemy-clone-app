import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import MenuIcon from "@material-ui/icons/Menu";

import UdeAvatar from "component/avatar";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "component/button";
import Category from "./Category";
import NavBarMobile from "./NavBarMobile";
import ShopingCart from "./ShopingCart";
import avatar from "assets/images/avatar1.jpg";
import Search from "./Search";
import SearchMobile from "./SearchMobile";
import CartMobile from "./CartMobile";
function Navbar() {
  const [SideBar, setSideBar] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const { userInfo } = useSelector((state) => state.authReducer);
  const logout = () => {
    localStorage.removeItem("userInfo");
    window.location.reload();
  };

  return (
    <div>
      <div className="header--navbar">
        <div className="header--navbar__icon-menu">
          <button
            className="header--navbar__icon-menu__btn"
            onClick={() => setSideBar(true)}
          >
            <MenuIcon className="menu-icon" />
          </button>
        </div>
        <div className="header--navbar__logo">
          <Link to="/">
            <img
              src="https://logodownload.org/wp-content/uploads/2019/07/udemy-logo.png"
              alt=""
            />
          </Link>
        </div>
        <Category />
        <Search />
        <div className="header--navbar__gap-button-business">
          <Link className="header--navbar__gap-button-business-text" to="/">
            Udemy for Business
          </Link>
          <div className="header--navbar__gap-button-business-hover">
            <div className="header--navbar__gap-button-business-hover-content">
              <div className="content-text">
                <span>
                  Get your team access to over 5,500 top Udemy courses, anytime,
                  anywhere.
                </span>
              </div>
              <Button type="button" color="btn--btn-primary" size="full">
                Try Udemy for Business
              </Button>
            </div>
          </div>
        </div>
        <div className="header--navbar__gap-button-teach">
          <Link className="header--navbar__gap-button-teach-text" to="/home">
            Teach on Udemy
          </Link>
          <div className="header--navbar__gap-button-teach-hover">
            <div className="header--navbar__gap-button-teach-hover-content">
              <div className="content-text">
                <span>
                  Turn what you know into an opportunity and reach millions
                  around the world.
                </span>
              </div>
              <Button type="button" color="btn--btn-primary" size="full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <ShopingCart />
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
        <CartMobile />
        <SearchMobile setSearchBar={setSearchBar} searchBar={searchBar} />
      </div>
      <NavBarMobile SideBar={SideBar} setSideBar={setSideBar} />
    </div>
  );
}

export default Navbar;
