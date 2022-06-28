import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import Home from "../../pages/Home";
import {Route, Routes} from "react-router";

const Site = () => {
    return (
        <>
            <Header page={true}/>
            <main>
                <Routes>
                    <Route element={<Home/>} path={"/"}/>
                </Routes>
            </main>
            <Footer/>
        </>
    );
};

export default Site;