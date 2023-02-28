import React from 'react';
import {Link} from "react-router-dom";
import { Login } from "../components/Login";

const LoginPage = () => {
    return (
        <div className="container">
            <h1>Login</h1>
            <Login/>
            <p style={{ fontWeight: 600 }}>or
                <Link className="link" to="/register">register</Link>
            </p>
        </div>
    );
};

export default LoginPage;
