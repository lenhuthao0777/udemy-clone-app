import { ADD_TO_CART } from "../constants/Cart";
const addToCart = (course) => {
    const data = { ...course };
    return {
        type: ADD_TO_CART,
        payload: {
            data,
        },
    };
};
export { addToCart };
