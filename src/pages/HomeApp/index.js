import React, {useEffect, useState} from 'react';
import './homeApp.css';
import preview from '../../assets/preview.png';
import previewImg from '../../assets/previewImg.jpg';
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../../store/reducers/categories";
import {getMovies} from "../../store/reducers/content";
import {useNavigate} from "react-router-dom";
import Like from "../../components/like";

const HomeApp = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
        dispatch(getMovies())
    }, []);
    const {categories} = useSelector(({categories}) => categories);
    const categoriesData = categories?.data?.results;
    const {movies} = useSelector(({content}) => content);
    const moviesData = movies?.data?.results;

    const [dramaData, setDramaData] = useState([]);
    const [horrorData, setHorrorData] = useState([]);
    const [actionData, setActionData] = useState([]);

    useEffect(() => {
        if (moviesData && categoriesData) {
            setDramaData(moviesData.filter(item => item.category.toLowerCase() === 'drama'));
            setHorrorData(moviesData.filter(item => item.category.toLowerCase() === 'horror'));
            setActionData(moviesData.filter(item => item.category.toLowerCase() === 'action'))
        }
    }, [moviesData, categoriesData]);

    return (
        <>
            <section className="preview">
                <div className="container">
                    <div className="preview__box">
                        <h1 className="preview__title">Lucifer</h1>
                        <p className="preview__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Architecto ducimus ea nisi numquam optio quis rem sequi! At corporis cum doloremque facilis
                            fuga, in nesciunt ratione totam. Aperiam impedit minima molestias neque vel? Ad, eius.</p>
                        <button className="preview__btn">
                            <i className="ri-play-fill"/>
                            Смотреть
                        </button>
                    </div>
                </div>
                <img className="preview__bg" src={preview} alt=""/>
            </section>
            <section className="rec">
                <div className="container">
                    {categoriesData && moviesData
                        ? categoriesData.map((category, categoryIdx) => (
                            <div key={categoryIdx} className="rec__box">
                                <h2 className="rec__category">{category.title}</h2>
                                <div className="rec__box_list">
                                    {
                                        moviesData.map((movie, movieIdx) => (
                                            <div key={movieIdx} className="rec__box_relative">
                                                <div
                                                    className={movieIdx === 0 ? "rec__box_item rec__box_item-first" : "rec__box_item"}>
                                                    <div className={"rec__box_img"}>
                                                        <img onClick={() => navigate(`movie/${movie.id}`)}
                                                             src={movie.poster} alt=""/>
                                                    </div>
                                                    <div className="rec__box_item_info">
                                                        <div className="rec__box_item_row">
                                                            <div onClick={() => navigate(`movie/${movie.id}`)}
                                                                 className="rec__box_item_action">
                                                                <i className="ri-play-fill"/>
                                                            </div>
                                                            <div className="rec__box_item_action">
                                                                <Like id={movie.id}/>
                                                            </div>
                                                        </div>
                                                        <h3 className="rec__box_item-title">{movie.title}</h3>
                                                        <p className="rec__box_item-category">{category.title}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )) : ''
                    }
                </div>
            </section>
        </>
    );
};

export default HomeApp;