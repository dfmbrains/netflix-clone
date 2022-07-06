import {Content} from "../../api";

const initialState = {
    movies: {},
    movieById: {},
    favoriteData: {},
    postMovie: {}
};

const movies = (state = initialState, action) => {
    switch (action.type) {
        case "GET_MOVIES": {
            return {
                ...state,
                movies: action.data,
            };
        }
        case "GET_MOVIE_BY_ID": {
            return {
                ...state,
                movieById: action.data,
            };
        }
        case "POST_MOVIE": {
            return {
                ...state,
                postMovie: action.data,
            };
        }
        case "POST_FAVORITE": {
            return {
                ...state,
                favoriteData: action.data,
            };
        }
        default:
            return state
    }
};

export const setMovies = (data) => ({type: "GET_MOVIES", data});
export const setMoviesById = (data) => ({type: "GET_MOVIE_BY_ID", data});
export const setPostMovie = (data) => ({type: "POST_MOVIE", data});
export const setFavorite = (data) => ({type: "POST_FAVORITE", data});

export const getMovies = () => (dispatch) => {
    Content.getMovies().then((response) => {
        dispatch(setMovies(response))
    })
};
export const getMoviesById = (id) => (dispatch) => {
    Content.getMovieById(id).then((response) => {
        dispatch(setMoviesById(response))
    })
};
export const postMovie = (data) => (dispatch) => {
    Content.postMovie(data).then((response) => {
        dispatch(setPostMovie(response))
    })
};
export const postFavorite = (id) => (dispatch) => {
    Content.postFavorites(id).then((response) => {
        dispatch(setFavorite(response))
    })
};

export default movies