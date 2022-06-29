import React from 'react';
import bg from '../../assets/homePageBg.png';
import './home.css';
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <section className="home">
            <div className="home__box">
                <h1 className="home__title">Unlimited movies, TV shows and more.</h1>
                <p className="home__subtitle">Watch anywhere. Cancel anytime.</p>
                <p className="home__descr">Ready to watch? Enter your email to create or restart your membership.</p>
                <button type="button" onClick={() => navigate('/signup')} className="home__button">
                    Get Started <i className="ri-arrow-right-s-line"/>
                </button>
            </div>
            <img className="home__bg" src={bg} alt=""/>
        </section>
    );
};

export default Home;