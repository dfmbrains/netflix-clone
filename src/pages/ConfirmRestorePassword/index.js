import React, {useState} from 'react';
import '../SignIn/signin.css';
import {Link} from "react-router-dom";
import Header from "../../shared/Header";
import bg from '../../assets/bg.png';
import {useDispatch} from "react-redux";
import {confirmRestorePassword} from "../../store/reducers/account";

const ConfirmRestorePassword = () => {
    // const location = useLocation();

    // const fromPage = location.state?.from?.pathname || '/';

    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();

    const confirmRestorePasswordFunc = (e) => {
        e.preventDefault();
        const restoreData = {
            email: email,
            code: code,
            password: password,
            password_confirmation: confirmPassword
        };
        dispatch(confirmRestorePassword(restoreData));
    };

    return (
        <>
            <Header page={false}/>
            <main>
                <section className="auth">
                    <div style={{height: "70%"}} className="auth__box">
                        <h2 className="auth__title">Restore Password</h2>
                        <form onSubmit={(e) => confirmRestorePasswordFunc(e)} className="auth__form">
                            <input onChange={(e) => setEmail(e.target.value)} autoComplete={"on"}
                                   placeholder="Email" className="auth__input" type="emai"/>
                            <input onChange={(e) => setCode(e.target.value)} autoComplete={"on"}
                                   placeholder="Code" className="auth__input auth__input_margin" type="number"/>
                            <input style={{margin: "0 0 16px"}} onChange={(e) => setPassword(e.target.value)}
                                   autoComplete={"on"} placeholder="Password" className="auth__input" type="password"/>
                            <input onChange={(e) => setConfirmPassword(e.target.value)} autoComplete={"on"}
                                   placeholder="Confirm Password" className="auth__input" type="password"/>
                            <button type="submit" className="auth__btn">Confirm</button>
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

export default ConfirmRestorePassword;