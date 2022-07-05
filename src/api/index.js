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
                return response;
            })
            .then(() => window.location.href = '/confirm')
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
                return response
            })
            .then(() => window.location.href = '/app')
            .catch((error) => {
                alert(error);
                return error.response
            })
    },
    postRestorePassword(data) {
        return instanceNotAuthorized
            .post(`account/forgot_password/`, data)
            .then((response) => {
                return response
            })
            .then(() => window.location.href = '/confirm-re-account')
            .catch((error) => {
                alert(error);
                return error.response
            })
    },
    postConfirmRestorePassword(data) {
        return instanceNotAuthorized
            .post(`account/forgot_password_complete/`, data)
            .then((response) => {
                return response
            })
            .then(() => window.location.href = '/signin')
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
                return response
            })
            .then(() => window.location.href = '/signin')
            .catch((error) => {
                alert(error);
                return error.response
            })
    },
    postChangePassword(data) {
        return instance
            .post(`account/change_password/`, data)
            .then((response) => {
                return response
            })
            .then(() => window.location.href = '/app')
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

export const Content = {
    getMovies() {
        return instanceNotAuthorized
            .get(`movie/`)
            .then((response) => {
                return response
            })
            .catch((error) => {
                return error.response
            })
    },
    getMovieById(id) {
        return instanceNotAuthorized
            .get(`movie/${id}/`)
            .then((response) => {
                return response
            })
            .catch((error) => {
                return error.response
            })
    }
};

export const Comments = {
    getComments() {
        return instanceNotAuthorized
            .get(`review/`)
            .then((response) => {
                return response
            })
            .catch((error) => {
                return error.response
            })
    },
    postComments(data) {
        return instanceNotAuthorized
            .post(`review/`, data)
            .then((response) => {
                return response
            })
            .catch((error) => {
                alert(error);
                return error.response
            })
    }
};

export const Likes = {
    postLikes(id) {
        return instance
            .post(`review/${id}/like/`)
            .then((response) => {
                return response
            })
            .catch((error) => {
                alert(error);
                return error.response
            })
    }
};