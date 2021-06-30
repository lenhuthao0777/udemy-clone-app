import React from "react";
import { useSelector } from "react-redux";
import CartAvailable from "./CartAvailable";
import CartEmpty from "./CartEmpty";
function ShoppingCart() {
    const { cart } = useSelector((state) => state.CartReducer);
    return (
        <div className="shopping-cart">
            <div className="shopping-cart__heading">
                <div className="container">
                    <h1>Basket</h1>
                </div>
            </div>
            <div className="container">
                <div className="shopping-cart__content">
                    <div className="shopping-cart_body">
                        <div className="shopping-cart_body-quantity">
                            <span>({cart.length}) courses in the basket</span>
                        </div>
                        {cart.length > 0 ? <CartAvailable cart={cart} /> : <CartEmpty />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
