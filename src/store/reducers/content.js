import {Content} from "../../api";

const initialState = {
    movies: {}
};

const movies = (state = initialState, action) => {
    switch (action.type) {
        case "GET_MOVIES": {
            return {
                ...state,
                movies: action.data,
            };
        }
        default:
            return state
    }
};

export const setMovies = (data) => ({type: "GET_MOVIES", data});

export const getMovies = () => (dispatch) => {
    Content.getMovies().then((response) => {
        dispatch(setMovies(response))
    })
};

export default movies