import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import Gap from "../Gap";
import CartMobile from "./CartMobile";
import Category from "./Category";
import HeaderButtons from "./HeaderButtons";
import HeaderLogo from "./HeaderLogo";
import NavBarMobile from "./NavBarMobile";
import Search from "./Search";
import SearchMobile from "./SearchMobile";
import ShopingCart from "./ShopingCart";

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
