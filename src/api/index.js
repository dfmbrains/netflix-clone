import axios from "axios";

export const instance = axios.create({
    baseURL: `http://34.107.122.155/`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
        // Authorization: `Bearer ${get_token()}`,
    },
});

export const instanceNotAuthorized = axios.create({
    baseURL: `http://34.107.122.155/`,
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
                localStorage.setItem("token", "token");
                return response;
            })
            .catch((error) => {
                alert(error)
                return error.response;
            });
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