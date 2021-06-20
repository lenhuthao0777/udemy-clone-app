import React from "react";
import { FaTag } from "react-icons/fa";
function CartAvailable() {
    return (
        <div className="cart-available">
            <div className="cart-available__content">
                <div className="cart-available__content-list">
                    <div className="cart-available__list">
                        <div className="cart-available__list-item">
                            <div className="cart-available__list-item--img">
                                <img src="./img/kh1.jpg" alt="" />
                            </div>
                            <div className="cart-available__list-info">
                                <h3>The Complete Dart Language Guide for Beginners and Beyond</h3>
                                <p>By Andrea Bizzotto, Flutter GDE, Developer and Instructor</p>
                            </div>
                            <div className="cart-available__list-handle">
                                <p>Remove</p>
                                <p>Save for later</p>
                                <p>Access the wishlist</p>
                            </div>
                            <div className="cart-available__list-price">
                                <p>
                                    US $ 89.99 <FaTag />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="cart-available__checkout"></div>
                </div>
            </div>
        </div>
    );
}

export default CartAvailable;
