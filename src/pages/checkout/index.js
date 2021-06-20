import React from "react";
import CartEmpty from "./CartEmpty";
import CartAvailable from "./CartAvailable";
function ShoppingCart() {
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
                            <span>(0) courses in the basket</span>
                        </div>
                        {/* <CartEmpty /> */}
                        <CartAvailable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
