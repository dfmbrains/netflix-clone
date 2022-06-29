import axios from "axios";

export const instance = axios.create({
    baseURL: `34.107.122.155/`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
        // Authorization: `Bearer ${get_token()}`,
    },
});

export const instanceNotAuthorized = axios.create({
    baseURL: `34.107.122.155/`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
    },
});

export const Account = {
    postRegister(data) {
        return instanceNotAuthorized
            .post(`account/register/`, data)
            .then((response) => {
                console.log('success');
                return response
            })
            .catch((error) => {
                return error.response
            })
    }
};