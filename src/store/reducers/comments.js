import {Comments} from "../../api";

const initialState = {
    comments: {},
    commentsPost: {}
};

const comments = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COMMENTS": {
            return {
                ...state,
                comments: action.data,
            };
        }
        case "POST_COMMENTS": {
            return {
                ...state,
                commentsPost: action.data,
            };
        }
        default:
            return state
    }
};

export const setGetComments = (data) => ({type: "GET_COMMENTS", data});
export const setPostComments = (data) => ({type: "POST_COMMENTS", data});

export const getComments = () => (dispatch) => {
    Comments.getComments().then((response) => {
        dispatch(setGetComments({data: response.data}))
    })
};
export const postComments = (data) => (dispatch) => {
    Comments.postComments(data).then((response) => {
        dispatch(setPostComments({data: response.data}))
    })
};

export default comments