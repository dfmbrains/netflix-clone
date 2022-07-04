import React from 'react';
import '../SignIn/signin.css';
import Header from "../../shared/Header";
import {Link} from "react-router-dom";
import bg from "../../assets/bg.png";

const Confirm = () => {
    return (
        <>
            <Header page={false}/>
            <main>
                <section className="auth">
                    <div className="auth__confirm">
                        <p>
                            Подтвердите письмо, затем вернитесь на страницу:
                        </p>
                        <div className="auth__center">
                            <Link to={"/signin"}>Войти в аккаунт</Link>
                        </div>
                    </div>
                    <img className={"auth__bg"} src={bg} alt=""/>
                </section>
            </main>
        </>
    );
};

export default Confirm;