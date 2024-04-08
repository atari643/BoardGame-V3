import React, { useState, useEffect } from 'react';
import './Login.css';
import usersData from './user.json';
import App from './App';
import Top10 from './Top10';
interface User {
    id: number;
    login: string;
    nbVictoires: number;
    nbDefaites: number;
}

interface LoginPageProps {
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    setUserData: React.Dispatch<React.SetStateAction<User>>;
}

const LoginPage: React.FC<LoginPageProps> = ({ setIsAuthenticated, setUserData }) => {
    const [name, setName] = useState('');
    const [route, setRoute] = useState<string>(window.location.pathname);

    const navigate = (path: string) => {
        window.history.pushState(null, '', path);
        setRoute(window.location.pathname);
        window.location.reload();
    };

    useEffect(() => {
        const user = sessionStorage.getItem('user');
        if (user) {
            setIsAuthenticated(true);
            sessionStorage.setItem('isLoggedIn', JSON.stringify(true));
            
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const user = usersData.users.find((user: User) => user.login === name);
        if (user) {
            setIsAuthenticated(true);
            sessionStorage.setItem('isLoggedIn', JSON.stringify(true));
            setUserData(user);
            sessionStorage.setItem('user', JSON.stringify(user));
            navigate('/Play');
        } else {
            const shouldAddUser = window.confirm('User not found. Do you want to add a new user?');

            if (shouldAddUser) {
                const newUser: User = {
                    id: usersData.users.length + 1,
                    login: name,
                    nbVictoires: 0,
                    nbDefaites: 0,
                };

                usersData.users.push(newUser);
                setIsAuthenticated(true);
                sessionStorage.setItem('isLoggedIn', JSON.stringify(true));

                sessionStorage.setItem('user', JSON.stringify(newUser));
                navigate('/Play');
            } else {
                alert('Invalid login');
            }
        }
    };

    return (
        <div className="Login">
            <h1>Please log in to Access BoardGames </h1>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
            {route === '/Play' && <App userData={usersData} logged={true} />}
        </div>
    );
};

export default LoginPage;

