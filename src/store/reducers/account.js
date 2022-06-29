import {Account} from "../../api";

const initialState = {
    registerData: {}
};

const account = (state = initialState, action) => {
    switch (action.type) {
        case "POST_REGISTER": {
            return {
                ...state,
                registerData: action.data,
            };
        }
        default:
            return state
    }
};

export const setRegisterAccount = (data) => ({type: "POST_REGISTER", data});

export const registerAccount = (data) => (dispatch) => {
    console.log(data);
    Account.postRegister(data).then((response) => {
        dispatch(setRegisterAccount({data: response.data}))
    })
};

export default account