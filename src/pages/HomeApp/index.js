import React from 'react';
import './preview.css';
import preview from '../../assets/preview.png';

const HomeApp = () => {
    return (
        <section className="preview">
            app
            <img className="preview__bg" src={preview} alt=""/>
        </section>
    );
};

export default HomeApp;