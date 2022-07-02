import axios from "axios";

export const instance = axios.create({
    baseURL: `https://hackaton.lekar.kg/`,
    headers: {
        Authorization: `Token ${localStorage?.token}`,
    },
});

export const instanceNotAuthorized = axios.create({
    baseURL: `https://hackaton.lekar.kg/`,
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
            .post(`account/login/`, data)
            .then((response) => {
                localStorage.setItem("token", response?.data?.token);
                window.location.href = '/app';
                return response
            })
            .catch((error) => {
                alert(error);
                return error.response
            })
    },
    postLogout() {
        return instance
            .post(`account/logout/`)
            .then((response) => {
                localStorage.removeItem("token");
                window.location.href = '/signin';
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