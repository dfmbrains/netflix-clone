import React from 'react';
import './signin.css';
import {Link} from "react-router-dom";
import Header from "../../shared/Header";
import bg from '../../assets/bg.png';

const SignIn = () => {
    // const navigate = useNavigate();
    // const location = useLocation();

    // const fromPage = location.state?.from?.pathname || '/';

    return (
        <>
            <Header page={false}/>
            <main>
                <section className="auth">
                    <div className="auth__box">
                        <h2 className="auth__title">Sign In</h2>
                        <form className="auth__form">
                            <input autoComplete={"on"} placeholder="Email or phone number" className="auth__input" type="text"/>
                            <input autoComplete={"on"} placeholder="Password" className="auth__input auth__input_margin" type="password"/>
                            <button className="auth__btn">Sign In</button>
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