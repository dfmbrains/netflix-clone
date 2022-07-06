import React from 'react';
import {useDispatch} from "react-redux";
import {postFavorite} from "../../store/reducers/content";

const Like = ({id}) => {

    const dispatch = useDispatch();
    const likeFunc = (e) => {
        e.preventDefault();
        dispatch(postFavorite(id))
    };

    return (
        <i onClick={(e) => likeFunc(e)} className={"ri-heart-add-line"}/>
        //ri-heart-add-fill
    );
};

export default Like;