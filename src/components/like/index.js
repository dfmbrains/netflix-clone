import React from 'react';
import {postLikes} from "../../store/reducers/likes";
import {useDispatch} from "react-redux";

const Like = ({id}) => {

    const dispatch = useDispatch();
    const likeFunc = (e) => {
        e.preventDefault();
        dispatch(postLikes(id))
    };

    return (
        <i onClick={(e) => likeFunc(e)} className="ri-heart-add-line"/>
    );
};

export default Like;