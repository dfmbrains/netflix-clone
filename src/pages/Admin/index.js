import React, {useEffect, useState} from 'react';
import {getCategories} from "../../store/reducers/categories";
import {useDispatch, useSelector} from "react-redux";
import {postMovie} from "../../store/reducers/content";

const Admin = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [year, setYear] = useState('');
    const [category, setCategory] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, []);
    const {categories} = useSelector(({categories}) => categories);
    const categoriesData = categories?.data?.results;

    const createMovieFunc = (e) => {
        e.preventDefault();
        const data = {
            title: title,
            description: description,
            year: year,
            category: category
        };
        dispatch(postMovie(data))
    };

    return (
        <section className="account">
            <div className="account__box">
                <h1 className={"account__title"}>Create Movie</h1>
                <form onSubmit={(e) => createMovieFunc(e)}>
                    <input required={true} onChange={(e) => setTitle(e.target.value)}
                           placeholder={"Title"} type="text"/>
                    <input required={true} onChange={(e) => setDescription(e.target.value)}
                           placeholder={"Description"} type="text"/>
                    <input required={true} onChange={(e) => setYear(e.target.value)}
                           placeholder={"Year"} type="number"/>
                    <select required={true} onChange={(e) => setCategory(e.target.value)}>
                        <option aria-readonly={"true"}>Choose Category</option>
                        {categoriesData && categoriesData.map((category, categoryIdx) => (
                            <option key={categoryIdx} value={category.title.toLowerCase()}>{category.title}</option>
                        ))}
                    </select>
                    <button type={"submit"}>Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Admin;