import React, { useEffect, useState } from 'react';
import './Nav.css';
import Login from './Login';
import App from './App';
import Top10 from './Top10';
function Nav() {
    const [route, setRoute] = useState<string>(window.location.pathname);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
        const saved = sessionStorage.getItem('isLoggedIn');
        const initialValue = JSON.parse(saved!);
        return initialValue || false;
    })
    const [usersData, setUsersData] = useState<any>(null);

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

    const handleLogout = () => {
        setIsLoggedIn(false);
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('looser');
        navigate('/Log');
    };

    const handleSetUserData = (userData: any) => {
        setUsersData(userData);
    };

    return (
        <div className="Nav">
            <nav>
                <ul>
                    <li>
                        <h1>BordGame</h1>
                    </li>
                    <li>
                        <button onClick={() => isLoggedIn ? navigate('/Play') : navigate('/Log')}>Play</button>
                    </li>
                    <li>
                        <button onClick={() => navigate('/Top-10')}>Top-10</button>
                    </li>
                    <li>
                        {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
                    </li>
                </ul>
            </nav>
            <div className="content">
                {route === '/Log' && <Login setIsAuthenticated={setIsLoggedIn} setUserData={handleSetUserData} />}
                {route === '/Play' && <App userData={usersData} logged={isLoggedIn} />}
                {route === '/Top-10' && <Top10/>}
            </div>
        </div>
    );
}

export default Nav;
