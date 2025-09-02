import React, { useContext, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../context/UserContext";

function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const { setUser } = useContext(UserContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:8090/api/auth/login',
                {email, password}
            );

            const token = response.data.token;
            localStorage.setItem('token', token); // save token
            localStorage.setItem('user', JSON.stringify(response.data.user)); // save user
            setUser(response.data.user);
            navigate('/');
        } catch (err) {
            setError('Invalid email or password.');
        }
    };


    return (
        <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-xl">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <form onSubmit={handleLogin}>
                <input 
                    className="w-full p-2 border mb-3 rounded"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                ></input>

                <input
                    className="w-full p-2 border mb-3 rounded"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                ></input>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginPage;