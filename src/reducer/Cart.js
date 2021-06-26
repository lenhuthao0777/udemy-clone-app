import { ADD_TO_CART } from "constants/Cart";
const initialState = {
    cart: [],
};
const CartReducer = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case ADD_TO_CART:
            console.log(action.type);
            let newCart = [...state.cart];
            // let index = newCart.findIndex((course) => course.maKhoaHoc === action.cart.maKhoaHoc);
            newCart.push(action.payload.data);
            state.cart = newCart;
            return { ...state, newCart };
        default:
            return state;
    }
};
export default CartReducer;
