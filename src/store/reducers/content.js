import {Content} from "../../api";

const initialState = {
    movies: {},
    movieById: {}
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
        default:
            return state
    }
};

export const setMovies = (data) => ({type: "GET_MOVIES", data});
export const setMoviesById = (data) => ({type: "GET_MOVIE_BY_ID", data});

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

export default movies