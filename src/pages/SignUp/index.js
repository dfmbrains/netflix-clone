import React from 'react';
import '../SignIn/signin.css';
import {Link} from "react-router-dom";
import Header from "../../shared/Header";
import bg from '../../assets/bg.png';

const SignUp = () => {
    // const navigate = useNavigate();
    // const location = useLocation();
    //
    // const fromPage = location.state?.from?.pathname || '/';

    return (
        <>
            <Header page={false}/>
            <main>
                <section className="auth">
                    <div className="auth__box">
                        <h2 className="auth__title">Sign Up</h2>
                        <form className="auth__form">
                            <input placeholder="Email or phone number" className="auth__input" type="text"/>
                            <input placeholder="Password" className="auth__input auth__input_margin" type="password"/>
                            <button className="auth__btn">Sign In</button>
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