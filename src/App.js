import React, {useEffect} from "react";
import "remixicon/fonts/remixicon.css";
import {Route, Routes} from "react-router";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomeApp from "./pages/HomeApp";
import Layout from "./components/layout";
import Home from "./pages/Home";
import RestorePassword from "./pages/RestorePassword";
import Confirm from "./pages/Confirm";
import ConfirmRestorePassword from "./pages/ConfirmRestorePassword";

function App() {

    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/app"} element={<Layout/>}>
                <Route index element={<HomeApp/>}/>
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
