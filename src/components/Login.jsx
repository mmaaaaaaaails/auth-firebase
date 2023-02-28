import React from 'react';
import { Form } from './Form';
import { useDispatch } from "react-redux";
import {setUser} from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }));
                navigate('/')
            })
            .catch(console.error)
    }

    return (
        <Form
            title="sign in"
            handleClick={handleLogin}
        >

        </Form>
    );
};

export {Login};
