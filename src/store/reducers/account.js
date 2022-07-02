import {Account} from "../../api";

const initialState = {
    registerData: {},
    loginData: {},
    logoutData: {},
};

const account = (state = initialState, action) => {
    switch (action.type) {
        case "POST_REGISTER": {
            return {
                ...state,
                registerData: action.data,
            };
        }
        case "POST_LOGIN": {
            return {
                ...state,
                loginData: action.data,
            };
        }
        case "POST_LOGOUT": {
            return {
                ...state,
                logoutData: action.data,
            };
        }
        default:
            return state
    }
};

export const setRegisterAccount = (data) => ({type: "POST_REGISTER", data});
export const setLoginAccount = (data) => ({type: "POST_LOGIN", data});
export const setLogoutAccount = (data) => ({type: "POST_LOGOUT", data});

export const registerAccount = (data) => (dispatch) => {
    Account.postRegister(data).then((response) => {
        dispatch(setRegisterAccount({data: response.data}))
    })
};
export const loginAccount = (data) => (dispatch) => {
    Account.postLogin(data).then((response) => {
        dispatch(setLoginAccount({data: response.data}))
    })
};
export const logoutAccount = () => (dispatch) => {
    Account.postLogout().then((response) => {
        dispatch(setLogoutAccount({data: response.data}))
    })
};

export default account