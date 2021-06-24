import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";
import ShopingCart from "./ShopingCart";
import Category from "./Category";
import NavBarMobile from "./NavBarMobile";
import { Close } from "@material-ui/icons";
import UdeAvatar from "components/avatar";
import { useSelector } from "react-redux";

function Navbar() {
    const [SideBar, setSideBar] = useState(false);
    const [SearchBar, setSearchBar] = useState(false);
    // const [showAvatar, setShowAvatar] = useState();
    const { userInfo } = useSelector((state) => state.SignUpFrom);
    console.log(userInfo);
    return (
        <div>
            <div className="header--navbar">
                <div className="header--navbar__icon-menu">
                    <button className="header--navbar__icon-menu__btn" onClick={() => setSideBar(true)}>
                        <MenuIcon className="menu-icon" />
                    </button>
                </div>
                <div className="header--navbar__logo">
                    <Link to="/">
                        <img src="https://logodownload.org/wp-content/uploads/2019/07/udemy-logo.png" alt="" />
                    </Link>
                </div>
                <Category />
                <div className="header--navbar__input">
                    <form>
                        <button>
                            <SearchOutlinedIcon className="searchIcon" />
                        </button>
                        <input type="text" placeholder="Search" />
                    </form>
                </div>
                <div className="header--navbar__gap-button-business">
                    <Link className="header--navbar__gap-button-business-text" to="/">
                        Udemy for Business
                    </Link>
                    <div className="header--navbar__gap-button-business-hover">
                        <div className="header--navbar__gap-button-business-hover-content">
                            <div className="content-text">
                                <span>Get your team access to over 5,500 top Udemy courses, anytime, anywhere.</span>
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
                                <span>Turn what you know into an opportunity and reach millions around the world.</span>
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
                                <UdeAvatar size="AvatarSm" AvatarSrc="./img/avatar1.jpg" />
                                <div className="user-navbar__hover">
                                    <ul>
                                        <li>
                                            <Link to="/profile">Profile</Link>
                                        </li>
                                        <li>Log Out</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div style={{display: "flex", alignItems: "center"}}>
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
                <div className="header--navbar__icon-mobile">
                    <span className="header--navbar__icon-mobile-search" onClick={() => setSearchBar(true)}>
                        <SearchOutlinedIcon className="search-icon__mobile" />
                    </span>
                    <span className="header--navbar__icon-mobile-cart">
                        <Link to="/cart">
                            <ShoppingCartOutlinedIcon className="cart-icon__mobile" />
                        </Link>
                        <div className="cart-mobile__quantity">
                            <span>0</span>
                        </div>
                    </span>
                </div>
                <div className={`mobile-input__search ${SearchBar ? "active" : ""}`}>
                    <div className="mobile-search-icon">
                        <SearchOutlinedIcon className="search-icon" />
                    </div>
                    <form action="">
                        <input type="text" placeholder="Search" />
                    </form>
                    <div className="mobile-close-icon" onClick={() => setSearchBar(false)}>
                        <Close className="close-icon" />
                    </div>
                </div>
                <div className={`mobile-input__search-overlay ${SearchBar ? "active" : ""}`} onClick={() => setSearchBar(false)}></div>
            </div>
            <NavBarMobile SideBar={SideBar} setSideBar={setSideBar} />
        </div>
    );
}

export default Navbar;
