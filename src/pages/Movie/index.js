import React, {useEffect, useState} from 'react';
import './movie.css';
import {useParams} from "react-router";
import previewImg from '../../assets/previewImg.jpg';
import {useDispatch, useSelector} from "react-redux";
import {postComments} from "../../store/reducers/comments";
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
        // dispatch(postComments(commentData))
    };
    return (
        <section className="movie">
            <div className="container">
                {movieData
                    ? <>
                        <div className="movie__box">
                            <img className="movie__img" src={previewImg} alt=""/>
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
                                <p>10</p>
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
                                    <div className="movie__comments_item">
                                        <div>
                                            <h3>John</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
                                                libero!</p>
                                        </div>
                                    </div>
                                    <div className="movie__comments_item">
                                        <div>
                                            <h3>John</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
                                                libero!</p>
                                        </div>
                                    </div>
                                    <div className="movie__comments_item">
                                        <div>
                                            <h3>John</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
                                                libero!</p>
                                        </div>
                                    </div>
                                    <div className="movie__comments_item">
                                        <div>
                                            <h3>John</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
                                                libero!</p>
                                        </div>
                                    </div>
                                    <div className="movie__comments_item">
                                        <div>
                                            <h3>John</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
                                                libero!</p>
                                        </div>
                                    </div>
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