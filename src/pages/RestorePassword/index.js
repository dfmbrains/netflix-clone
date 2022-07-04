import React, {useState} from 'react';
import '../SignIn/signin.css';
import {Link} from "react-router-dom";
import Header from "../../shared/Header";
import bg from '../../assets/bg.png';
import {useDispatch} from "react-redux";
import {restorePassword} from "../../store/reducers/account";

const RestorePassword = () => {
    // const location = useLocation();

    // const fromPage = location.state?.from?.pathname || '/';

    const [email, setEmail] = useState('');

    const dispatch = useDispatch();

    const loginFunc = (e) => {
        e.preventDefault();
        const restoreData = {
            email: email
        };
        dispatch(restorePassword(restoreData));
    };

    return (
        <>
            <Header page={false}/>
            <main>
                <section className="auth">
                    <div className="auth__box">
                        <h2 className="auth__title">Restore Password</h2>
                        <form onSubmit={(e) => loginFunc(e)} className="auth__form">
                            <input onChange={(e) => setEmail(e.target.value)} autoComplete={"on"}
                                   placeholder="Email" className="auth__input" type="email"/>
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

export default RestorePassword;