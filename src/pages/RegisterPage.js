import React from 'react';
import {Link} from "react-router-dom";
import { SignUp } from "../components/SignUp";

const RegisterPage = () => {
    return (
        <div className="container">
            <h1>Register</h1>
            <SignUp/>
            <p style={{ fontWeight: 600 }}>Already have an account?
                <Link className="link" to="/login">Sign in</Link>
            </p>
        </div>
    );
};

export default RegisterPage;
