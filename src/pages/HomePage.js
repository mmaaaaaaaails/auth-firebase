import React from 'react';
import { Navigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import { useAuth } from "../hooks/use-auth";
import { removeUser } from "../store/slices/userSlice";

const HomePage = () => {

    const { isAuth, email } = useAuth();
    const dispatch = useDispatch();

    return isAuth ? (
        <div className="container">
            <h1>Welcome</h1>
            <button className="button btn-out" onClick={() => dispatch(removeUser())}>
                Login out from {email}
            </button>
        </div>
    ) :(
        <Navigate to="/login"/>
    );
};

export default HomePage;
