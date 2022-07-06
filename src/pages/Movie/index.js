import React, {useEffect, useState} from 'react';
import './movie.css';
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {postComments, postLikeComment} from "../../store/reducers/comments";
import {getMoviesById} from "../../store/reducers/content";
import Like from "../../components/like";

const Movie = () => {
    const {id} = useParams();
    const [player, setPlayer] = useState(false);
    const dispatch = useDispatch();
    //get data
    useEffect(() => {
        dispatch(getMoviesById(id))
    }, []);
    const {movieById} = useSelector(({content}) => content);
    const movieData = movieById?.data;
    //post comments
    const [comment, setComment] = useState('');
    const postCommentFunc = (e) => {
        e.preventDefault();
        const commentData = {
            review: comment,
            product: id
        };
        dispatch(postComments(commentData))
    };
    const postLikeCommentsFunc = (reviewIdx) => {
        dispatch(postLikeComment(reviewIdx))
    };
    return (
        <section className="movie">
            <div className="container">
                {movieData
                    ? <>
                        <div className="movie__box">
                            <div className="movie__img">
                                <img src={movieData.poster} alt=""/>
                            </div>
                            <div className="movie__info">
                                <h1 className="movie__title">{movieData.title} <span
                                    style={{fontSize: "18px"}}>{movieData.year}</span></h1>
                                <p className="movie__subtitle">{movieData.description}</p>
                                <button onClick={() => setPlayer(!player)} className={"movie__btn"} type={"button"}>
                                    {player ? 'Close Player' : "Open Player!"}
                                    <i className="ri-play-fill"/>
                                </button>
                            </div>
                        </div>
                        <div className="movie__like">
                            <div className={"movie__like_box"}>
                                <Like id={movieData.id}/>
                            </div>
                        </div>
                        <div className={"movie__box"}>
                            <div className={player ? "movie__video" : "movie__video_none"}>
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/1sIuHFrjGgY"
                                        title="YouTube video player" frameBorder="0" allowFullScreen
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"/>
                            </div>
                            <div className="movie__comments">
                                <h2 className="movie__comments_title">Comments</h2>
                                <div className="movie__comments_box">
                                    {movieData?.reviews.map((review, idx) => (
                                        <div key={idx} className="movie__comments_item">
                                            <div className="movie__comments_item-box">
                                                <h3>{review.user}</h3>
                                                <p className="movie__comments_item-text">{review.review}</p>
                                                <div className={"movie__comments_item-like"}>
                                                    <i onClick={() => postLikeCommentsFunc(review.id)}
                                                       className="ri-heart-add-line"/>
                                                    <p>{review.like}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <form onSubmit={(e) => postCommentFunc(e)} className={"movie__comments_form"}>
                                    <input onChange={(e) => setComment(e.target.value)}
                                           className={"movie__comments_input"}
                                           type="text"/>
                                    <button className="movie__comments_btn" type={"submit"}>Send!</button>
                                </form>
                            </div>
                        </div>
                    </>
                    : ''
                }
            </div>
        </section>
    );
};

export default Movie;