import {Likes} from "../../api";

const initialState = {
    likes: {},
};

const likes = (state = initialState, action) => {
    switch (action.type) {
        case "POST_LIKES": {
            return {
                ...state,
                likes: action.data,
            };
        }
        default:
            return state
    }
};

export const setPostComments = (data) => ({type: "POST_COMMENTS", data});

export const postLikes = (id) => (dispatch) => {
    Likes.postLikes(id).then((response) => {
        dispatch(setPostComments({data: response.data}))
    })
};

export default likes