import React from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo2.png';
import {Link, useNavigate} from "react-router-dom";

const Header = ({page}) => {

    const navigate = useNavigate();

    return (
        <header className="header">
            {page === 'app'
                ? <>
                    <span className="header__menu">
                        <i className="ri-menu-2-fill"/>
                    </span>
                    <Link className="header__logo" to={"/app"}>
                        <img src={logo2} alt=""/>
                    </Link>
                    <span className="header__search">
                        <i className="ri-search-line"/>
                    </span>
                </>
                : <>
                    <Link to="/">
                        <img src={logo} alt=""/>
                    </Link>
                    {page === 'home' ? <div className="header__btns">
                        {/*<select className="header__btns_l">*/}
                        {/*    <option value="1">English</option>*/}
                        {/*    <option value="2">Русский</option>*/}
                        {/*</select>*/}
                        <button onClick={() => navigate('/signin')} className="header__btns_s">Sign In</button>
                    </div> : ''}
                </>
            }
        </header>
    );
};

export default Header;