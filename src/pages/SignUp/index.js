import React, {useState} from 'react';
import '../SignIn/signin.css';
import {Link, useNavigate} from "react-router-dom";
import Header from "../../shared/Header";
import bg from '../../assets/bg.png';
import {registerAccount} from "../../store/reducers/account";
import {useDispatch} from "react-redux";

const SignUp = () => {
    const navigate = useNavigate();
    // const location = useLocation();
    //
    // const fromPage = location.state?.from?.pathname || '/';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();

    const registerFunc = (e) => {
        e.preventDefault();
        const registerData = {
            email: email,
            password: password,
            password_confirm: confirmPassword
        };
        dispatch(registerAccount(registerData));
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
                        <h2 className="auth__title">Sign Up</h2>
                        <form onSubmit={(e) => registerFunc(e)} className="auth__form">
                            <input autoComplete={"on"} required onChange={(e) => setEmail(e.target.value)}
                                   placeholder="Email or phone number" className="auth__input" type="text"/>
                            <input autoComplete={"on"} required onChange={(e) => setPassword(e.target.value)}
                                   placeholder="Password"
                                   className="auth__input auth__input_margin" type="password"/>
                            <input autoComplete={"on"} required onChange={(e) => setConfirmPassword(e.target.value)}
                                   placeholder="Password"
                                   className="auth__input" type="password"/>
                            <button type="submit" className="auth__btn">Sign Up</button>
                        </form>
                        <div className="auth__link">
                            New to Netflix?
                            <Link to="/signin">Sign in now.</Link>
                        </div>
                    </div>
                    <img className={"auth__bg"} src={bg} alt=""/>
                </section>
            </main>
        </>
    );
};

export default SignUp;