import React from "react";
import { FaShoppingCart } from "react-icons/fa";
function CartEmpty() {
    return (
        <div className="cart-empty">
            <div className="cart-empty__content">
                <div className="cart-empty__body">
                    <span className="cart-empty__icon">
                        <FaShoppingCart />
                    </span>
                    <p>Your basket is empty. Continue shopping and find a course!</p>
                    <button>Continue your purchases</button>
                </div>
            </div>
            <div className="cart-empty__text">
                <div className="cart-empty__text-save">
                    <h3>Saved for later</h3>
                    <p>You haven't saved any lessons for later.</p>
                </div>
                <div className="cart-empty__text-wishlist">
                    <h3>Recently added to wishlist</h3>
                    <p>You have not added any courses to your wishlist.</p>
                </div>
            </div>
        </div>
    );
}

export default CartEmpty;
