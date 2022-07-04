import React from 'react';
import Header from "../../shared/Header";
import {Outlet} from "react-router";

const Layout = () => {
    return (
        <>
            <Header page={'app'}/>
            <main style={{background: '#141414', minHeight: "100vh"}}>
                <Outlet/>
            </main>
        </>
    );
};

export default Layout;