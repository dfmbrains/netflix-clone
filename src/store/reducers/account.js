import {Account} from "../../api";

const initialState = {
    registerData: {},
    loginData: {},
    logoutData: {},
    restorePasswordData: {},
    confirmRestorePasswordData: {},
    changePasswordData: {},
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
        case "POST_RESTORE_PASSWORD": {
            return {
                ...state,
                restorePasswordData: action.data,
            };
        }
        case "POST_CONFIRM_RESTORE_PASSWORD": {
            return {
                ...state,
                confirmRestorePasswordData: action.data,
            };
        }
        case "POST_CHANGE_PASSWORD": {
            return {
                ...state,
                restorePasswordData: action.data,
            };
        }
        default:
            return state
    }
};

export const setRegisterAccount = (data) => ({type: "POST_REGISTER", data});
export const setLoginAccount = (data) => ({type: "POST_LOGIN", data});
export const setLogoutAccount = (data) => ({type: "POST_LOGOUT", data});
export const setRestorePassword = (data) => ({type: "POST_RESTORE_PASSWORD", data});
export const setConfirmRestorePassword = (data) => ({type: "POST_CONFIRM_RESTORE_PASSWORD", data});
export const setChangePassword = (data) => ({type: "POST_CHANGE_PASSWORD", data});

export const registerAccount = (data) => (dispatch) => {
    Account.postRegister(data).then((response) => {
        dispatch(setRegisterAccount({data: response.data}))
    })
};
export const loginAccount = (data) => (dispatch) => {
    Account.postLogin(data).then((response) => {
        dispatch(setLoginAccount({data: response.data}))
        return response
    })
};
export const restorePassword = (data) => (dispatch) => {
    Account.postRestorePassword(data).then((response) => {
        dispatch(setRestorePassword({data: response.data}))
    })
};
export const confirmRestorePassword = (data) => (dispatch) => {
    Account.postConfirmRestorePassword(data).then((response) => {
        dispatch(setConfirmRestorePassword({data: response.data}))
    })
};
export const logoutAccount = () => (dispatch) => {
    Account.postLogout().then((response) => {
        dispatch(setLogoutAccount({data: response.data}))
    })
};
export const changePassword = (data) => (dispatch) => {
    Account.postChangePassword(data).then((response) => {
        dispatch(setChangePassword({data: response.data}))
    })
};

export default account