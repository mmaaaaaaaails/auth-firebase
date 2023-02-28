import React, {useState} from 'react';

const Form = ({ title, handleClick }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <input
                className="input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />
            <button className="button" onClick={() => handleClick(email, password)}>
                {title}
            </button>
        </>
    );
};

export {Form};
