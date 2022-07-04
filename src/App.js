import React, {useEffect} from "react";
import "remixicon/fonts/remixicon.css";
import {Route, Routes, useLocation} from "react-router";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomeApp from "./pages/HomeApp";
import Layout from "./components/layout";
import Home from "./pages/Home";
import Confirm from "./pages/Confirm";
import ConfirmRestorePassword from "./pages/ConfirmRestorePassword";
import RequireAuth from "./components/hoc/RequireAuth";
import RestorePassword from "./pages/RestorePassword";
import Account from "./pages/Account";
import Movie from "./pages/Movie";

function App() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/app"} element={
                <RequireAuth>
                    <Layout/>
                </RequireAuth>
            }>
                <Route index element={<HomeApp/>}/>
                <Route path={"account"} element={<Account/>}/>
                <Route path={"movie/:id"} element={<Movie/>}/>
            </Route>
            <Route path={"/signin"} element={<SignIn/>}/>
            <Route path={"/signup"} element={<SignUp/>}/>
            <Route path={"/re-account"} element={<RestorePassword/>}/>
            <Route path={"/confirm-re-account"} element={<ConfirmRestorePassword/>}/>
            <Route path={"/confirm"} element={<Confirm/>}/>
        </Routes>
    );
}

export default App;
