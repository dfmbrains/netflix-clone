import {Categories} from "../../api";

const initialState = {
    categories: {}
};

const categories = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATEGORIES": {
            return {
                ...state,
                categories: action.data,
            };
        }
        default:
            return state
    }
};

export const setCategories = (data) => ({type: "GET_CATEGORIES", data});

export const getCategories = () => (dispatch) => {
    Categories.getCategories().then((response) => {
        dispatch(setCategories(response))
    })
};

export default categories