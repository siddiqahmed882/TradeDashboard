import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as route from './routes/Slugs';
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Home from "./pages/home.jsx";
import Profile from "./pages/profile.jsx";
import Challenge from "./pages/challenge.jsx";
import Platform from "./pages/platform.jsx";
import Help from "./pages/help.jsx";
import NotFound from "./pages/not-found.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import { useState } from "react";



function App() {
    const [account, setAccount] = useState({}); // Assuming account is an object

    return (
        <>
            <BrowserRouter>
                <ToastContainer />
                <Routes>
                    <Route path={route.LOGIN_PATH} element={<Login />} />
                    <Route path={route.REGISTER_PATH} element={<Register />} />

                    <Route path="" element={<PrivateRoute />}>
                        <Route path={route.ROOT_PATH} element={<Home account={account} setAccount={setAccount}/>} />
                        <Route path={route.CHALLENGE_PATH} element={<Challenge account={account} setAccount={setAccount}/>} />
                        <Route path={route.PROFILE_PATH} element={<Profile account={account} setAccount={setAccount}/>} />
                        <Route path={route.PLATFORM_PATH} element={<Platform account={account} setAccount={setAccount}/>} />
                        <Route path={route.HELP_PATH} element={<Help account={account} setAccount={setAccount}/>} />
                    </Route>

                    <Route path={'*'} element={<NotFound/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
};

export default App
