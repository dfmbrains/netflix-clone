import React from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import {Link, useNavigate} from "react-router-dom";

const Header = ({page}) => {

    const navigate = useNavigate();

    return (
        <header className="header">
            <Link to="/">
                <img className="header__logo" src={logo} alt=""/>
            </Link>
            {page ? <div className="header__btns">
                {/*<select className="header__btns_l">*/}
                {/*    <option value="1">English</option>*/}
                {/*    <option value="2">Русский</option>*/}
                {/*</select>*/}
                <button onClick={() => navigate('/signin')} className="header__btns_s">Sign In</button>
            </div> : ''}
        </header>
    );
};

export default Header;