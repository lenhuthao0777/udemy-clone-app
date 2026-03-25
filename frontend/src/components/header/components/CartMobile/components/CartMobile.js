import React from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function CartMobile({ setSearchBar }) {
  const { cart } = useSelector((state) => state.CartReducer);

  return (
    <div className="header--navbar__icon-mobile">
      <span
        className="header--navbar__icon-mobile-search"
        onClick={() => setSearchBar(true)}
      >
        <SearchOutlinedIcon className="search-icon__mobile" />
      </span>
      <span className="header--navbar__icon-mobile-cart">
        <Link to="/cart">
          <ShoppingCartOutlinedIcon className="cart-icon__mobile" />
        </Link>
        {cart.length > 0 ? (
          <div className="cart-mobile__quantity">
            <span>{cart.length}</span>
          </div>
        ) : null}
      </span>
    </div>
  );
}

export default CartMobile;
