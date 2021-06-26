import React from "react";
import CartEmpty from "./CartEmpty";
import CartAvailable from "./CartAvailable";
import { useSelector } from "react-redux";
function ShoppingCart() {
    const { cart } = useSelector((state) => state.CartReducer);
    console.log(cart);
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
