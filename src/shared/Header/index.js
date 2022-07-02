import React from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logoutAccount} from "../../store/reducers/account";

const Header = ({page}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutFunc = () => {
        dispatch(logoutAccount())
    };

    return (
        <header className="header">
            {page === 'app'
                ? <>
                    <div className="header__left">
                        <Link className="header__logo" to={"/app"}>
                            <img src={logo} alt=""/>
                        </Link>
                        <ul className="header__menu">
                            <li>
                                <NavLink to={"/app"}>Главная</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/app/bests"}>Лучшие</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/app/latest"}>Последние</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/app/my-list"}>Мой список</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="header__right">
                        <div className="header__search">
                            <i className="ri-search-line"/>
                        </div>
                        <div className="header__user">
                            <i className="header__user_i ri-user-fill"/>
                            <i className="header__user_i ri-arrow-down-s-fill"/>
                            <ul className="header__user_menu">
                                <li className="header__user_item">
                                    <i className="ri-user-fill"/>
                                    <Link to={"/account"}>Аккаунт</Link>
                                </li>
                                <li onClick={() => logoutFunc()} className="header__user_item">
                                    <i className="ri-logout-box-r-line"/>
                                    Выйти из Netflix
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
                : <>
                    <Link to="/">
                        <img src={logo} alt=""/>
                    </Link>
                    {page === 'home' ? <div className="header__btns">
                        <button onClick={() => navigate('/signin')} className="header__btns_s">Sign In</button>
                    </div> : ''}
                </>
            }
        </header>
    );
};

export default Header;