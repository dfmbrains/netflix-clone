import React, {useState} from 'react';
import './signin.css';
import {Link} from "react-router-dom";
import Header from "../../shared/Header";
import bg from '../../assets/bg.png';
import {useDispatch} from "react-redux";
import {loginAccount} from "../../store/reducers/account";
import {useNavigate} from "react-router";

const SignIn = () => {
    const navigate = useNavigate();
    // const location = useLocation();

    // const fromPage = location.state?.from?.pathname || '/';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const loginFunc = (e) => {
        e.preventDefault();
        const loginData = {
            email: email,
            password: password,
        };
        dispatch(loginAccount(loginData));
        if (localStorage.token) {
            navigate('/app')
        }
    };

    return (
        <>
            <Header page={false}/>
            <main>
                <section className="auth">
                    <div className="auth__box">
                        <h2 className="auth__title">Sign In</h2>
                        <form onSubmit={(e) => loginFunc(e)} className="auth__form">
                            <input onChange={(e) => setEmail(e.target.value)} autoComplete={"on"}
                                   placeholder="Email" className="auth__input" type="text"/>
                            <input onChange={(e) => setPassword(e.target.value)} autoComplete={"on"}
                                   placeholder="Password" className="auth__input auth__input_margin" type="password"/>
                            <button type="submit" className="auth__btn">Sign In</button>
                        </form>
                        <div className="auth__link">
                            New to Netflix?
                            <Link to="/signup">Sign up now.</Link>
                        </div>
                    </div>
                    <img className={"auth__bg"} src={bg} alt=""/>
                </section>
            </main>
        </>
    );
};

export default SignIn;