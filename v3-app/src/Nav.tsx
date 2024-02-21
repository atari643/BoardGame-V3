import React, { useEffect, useState } from 'react';
import './Nav.css';
import Login from './Login'; // Adjust the import path according to the location of your Login.tsx file
import App from './App';

function Nav() {
    const [route, setRoute] = useState(window.location.pathname);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = (path: string) => {
        window.history.pushState(null, '', path);
        setRoute(window.location.pathname);
    };

    useEffect(() => {
        const popstateListener = () => {
            setRoute(window.location.pathname);
        };
        window.addEventListener('popstate', popstateListener);
        return () => {
            window.removeEventListener('popstate', popstateListener);
        };
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);

    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="Nav">
            <h1>BordGame</h1>
            <nav>
                <ul>
                    <li>
                        <button onClick={() => navigate('/Play')}>Play</button>
                    </li>
                    <li>
                        <button onClick={() => navigate('/Top-10')}>Top-10</button>
                    </li>
                    {isLoggedIn ? (
                        <li>
                            <button onClick={handleLogout}>Log out</button>
                        </li>
                    ) : (
                        <li>
                            <button onClick={handleLogin}>Log in</button>
                        </li>
                    )}
                </ul>
            </nav>
            {route === '/Play' && <App/>}
            {route === '/Top-10' && <h2>Top 10</h2>}
            {route === '/Log' && <Login isAuthenticated={isLoggedIn} setIsAuthenticated={setIsLoggedIn} />}
        </div>
    );
}

export default Nav;
