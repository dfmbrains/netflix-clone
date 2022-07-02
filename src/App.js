import React, {useEffect} from "react";
import "remixicon/fonts/remixicon.css";
import {Route, Routes} from "react-router";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomeApp from "./pages/HomeApp";
import Layout from "./components/layout";
import Home from "./pages/Home";

function App() {

    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/app"} element={<Layout/>}>
                <Route index element={<HomeApp/>}/>
            </Route>
            <Route path={"/signin"} element={<SignIn/>}/>
            <Route path={"/signup"} element={<SignUp/>}/>
        </Routes>
    );
}

export default App;
