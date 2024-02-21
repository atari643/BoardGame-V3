import React, { useState } from 'react';
import './Login.css'

interface LoginPageProps {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPage: React.FC<LoginPageProps> = ({ isAuthenticated, setIsAuthenticated }) => {
    const [name, setName] = useState('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        
    };

    const handleSubmit = (e: React.FormEvent) => {
        setIsAuthenticated(true);
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={handleNameChange} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;