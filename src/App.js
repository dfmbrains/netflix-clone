import React from "react";
import {Route, Routes} from "react-router";
import Site from "./shared/Site";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<Site/>}/>
            <Route path={"/signin"} element={<SignIn/>}/>
            <Route path={"/signup"} element={<SignUp/>}/>
        </Routes>
    );
}

export default App;
