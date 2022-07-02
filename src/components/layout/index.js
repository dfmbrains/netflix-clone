import React from 'react';
import Header from "../../shared/Header";
import {Outlet} from "react-router";

const Layout = () => {
    return (
        <>
            <Header page={'app'}/>
            <main style={{background: '#141414'}}>
                <Outlet/>
            </main>
        </>
    );
};

export default Layout;