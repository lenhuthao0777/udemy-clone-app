import MenuIcon from "@material-ui/icons/Menu";

import UdeAvatar from "components/avatar";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "components/button";
import Category from "./Category";
import NavBarMobile from "./NavBarMobile";
import ShopingCart from "./ShopingCart";
import Search from "./Search";
import SearchMobile from "./SearchMobile";
import CartMobile from "./CartMobile";
import Gap from "../Gap";
import HeaderLogo from "./HeaderLogo";
import HeaderButtons from "./HeaderButtons";
function Navbar() {
  const [SideBar, setSideBar] = useState(false);
  const [searchBar, setSearchBar] = useState(false);

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
        <HeaderLogo />
        <Category />
        <Search />
        <Gap />
        <ShopingCart />
        <HeaderButtons />
        <CartMobile />
        <SearchMobile setSearchBar={setSearchBar} searchBar={searchBar} />
      </div>
      <NavBarMobile SideBar={SideBar} setSideBar={setSideBar} />
    </div>
  );
}

export default Navbar;
