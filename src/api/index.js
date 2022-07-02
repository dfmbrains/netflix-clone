import axios from "axios";

export const instance = axios.create({
    baseURL: `https://hackaton.lekar.kg/`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
        // Authorization: `Bearer ${get_token()}`,
    },
});

export const instanceNotAuthorized = axios.create({
    baseURL: `https://hackaton.lekar.kg/`,
    // headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json; charset=UTF-8",
    //     "Access-Control-Allow-Origin": "*"
    // },
});

export const Account = {
    postRegister(data) {
        return instanceNotAuthorized
            .post(`account/register/`, data)
            .then((response) => {
                window.location.href = '/signin';
                return response;
            })
            .catch((error) => {
                alert(error);
                return error.response;
            });
    },
    postLogin(data) {
        return instanceNotAuthorized
            .post(`/account/login/`, data)
            .then((response) => {
                console.log(response);
                return response
            })
            .catch((error) => {
                alert(error);
                return error.response
            })
    }
};

export const Categories = {
    getCategories() {
        return instanceNotAuthorized
            .get(`category/`)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error.response;
            });
    }
};