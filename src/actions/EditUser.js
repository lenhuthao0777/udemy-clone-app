import { USER_DETAIL } from "../constants/AddUserContants";
export const EditUser = (user) => {
    const data = { ...user };
    return {
        type: USER_DETAIL,
        payload: {
            data,
        },
    };
};
