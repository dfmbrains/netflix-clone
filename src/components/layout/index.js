import React from 'react';
import Header from "../../shared/Header";
import {Outlet} from "react-router";

const Layout = () => {
    return (
        <>
            <Header page={'app'}/>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default Layout;