import React, {useEffect} from 'react';
import './homeApp.css';
import preview from '../../assets/preview.png';
import previewImg from '../../assets/previewImg.jpg';
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../../store/reducers/categories";

const HomeApp = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories())
    }, []);
    const {categories} = useSelector(({categories}) => categories);
    const categoriesData = categories?.data;
    console.log(categoriesData);
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
                    {categoriesData
                        ? categoriesData.map((category, categoryIdx) => (
                            <div className="rec__box">
                                <h2 className="rec__category">{category.title}</h2>
                                <div className="rec__box_list">
                                    <div className="rec__box_relative">
                                        <div className="rec__box_item rec__box_item-first">
                                            <img src={previewImg} alt=""/>
                                            <div className="rec__box_item_info">
                                                <div className="rec__box_item_row">
                                                    <div className="rec__box_item_action">
                                                        <i className="ri-play-fill"/>
                                                    </div>
                                                    <div className="rec__box_item_action">
                                                        <i className="ri-heart-add-line"/>
                                                    </div>
                                                </div>
                                                <h3 className="rec__box_item-title">Бриджертоны</h3>
                                                <p className="rec__box_item-category">Comedy</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rec__box_relative">
                                        <div className="rec__box_item">
                                            <img src={previewImg} alt=""/>
                                            <div className="rec__box_item_info">
                                                <div className="rec__box_item_row">
                                                    <div className="rec__box_item_action">
                                                        <i className="ri-play-fill"/>
                                                    </div>
                                                    <div className="rec__box_item_action">
                                                        <i className="ri-heart-add-line"/>
                                                    </div>
                                                </div>
                                                <h3 className="rec__box_item-title">Бриджертоны</h3>
                                                <p className="rec__box_item-category">Comedy</p>
                                            </div>
                                        </div>
                                    </div>
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