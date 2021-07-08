import { ADD_TO_CART, DELETE_CART } from "../constants/Cart";
const addToCart = (course) => {
    const data = { ...course };
    return {
        type: ADD_TO_CART,
        payload: {
            data,
        },
    };
};
const deleteCart = (id) => {
    return {
        type: DELETE_CART,
        payload: {
            id,
        },
    };
};

export { addToCart, deleteCart };
