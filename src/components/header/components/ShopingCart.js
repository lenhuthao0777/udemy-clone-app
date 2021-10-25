import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "components/button";
function ShopingCart() {
    const { cart } = useSelector((state) => state.CartReducer);

    return (
        <>
            <div className="header--navbar__cart">
                <Link to="/cart">
                    <ShoppingCartOutlinedIcon className="cart-icon" />
                </Link>

                {cart.length > 0 ? (
                    <div className="header--navbar__cart-quantity">
                        <span>{cart.length}</span>
                    </div>
                ) : null}

                {cart.length > 0 ? (
                    <div className="header--navbar__cart-list">
                        <ul className="header--navbar__cart-list-courses">
                            {cart.map((item, index) => {
                                return (
                                    <li className="header--navbar__cart-list-courses__item" key={index}>
                                        <div className="courses--item__img">
                                            <img src={item.hinhAnh} alt="no img" />
                                        </div>
                                        <div className="header--navbar__cart-list-courses__item-infor">
                                            <div className="cart--courses__name">
                                                <h3>{item.tenKhoaHoc}</h3>
                                            </div>
                                            <div className="cart--courses__author">
                                                <span>Rudy Nappe</span>
                                            </div>
                                            <div className="cart--courses__price">
                                                <span className="cart--courses__price-new">USD 11.99</span>
                                                <span className="cart--courses__price-old">USD 99.99</span>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="header--navbar__cart-list__total">
                            <div className="cart-sub--total">
                                <span className="cart-sub--total__new">Total US $ 23.98</span>
                                <span className="cart-sub--total__old">US $ 192.98</span>
                            </div>
                            <div className="cart-button__pay">
                                <Link to="/cart">
                                    <Button type="button" color="btn btn--btn-primary" size="full">
                                        Go to shopping cart
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="header--navbar__cart-no_cart">
                        <p>Your basket is empty.</p>
                        <Link className="no-cart__link" to="/">
                            Continue your purchase
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}

export default ShopingCart;
