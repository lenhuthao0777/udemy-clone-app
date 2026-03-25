import { ADD_TO_CART, DELETE_CART } from "../constants/Cart";

let initialCart = [];
try {
    const savedCart = localStorage.getItem("cart");
    initialCart = savedCart ? JSON.parse(savedCart) : [];
} catch (e) {
    console.error("Failed to parse cart from localStorage", e);
}

const initialState = {
    cart: initialCart,
};

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const courseToAdd = action.payload.data;
            const existingIndex = state.cart.findIndex(
                (item) => item.id === courseToAdd.id
            );

            let newCart;
            if (existingIndex !== -1) {
                // If already in cart, don't add again (or update if needed)
                newCart = [...state.cart];
            } else {
                newCart = [...state.cart, courseToAdd];
            }

            localStorage.setItem("cart", JSON.stringify(newCart));
            return { ...state, cart: newCart };
        }
        case DELETE_CART: {
            const courseIdToDelete = action.payload.id;
            const newCart = state.cart.filter((item) => item.id !== courseIdToDelete);
            
            localStorage.setItem("cart", JSON.stringify(newCart));
            return { ...state, cart: newCart };
        }
        default:
            return state;
    }
};

export default CartReducer;
