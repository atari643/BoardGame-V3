import React from 'react';
import './Nav.css';

function navDisconnect() {
    return (
        <div className="Nav">
            <h1>BordGame</h1>
            <nav>
                <ul>
                    <li><a href="/Play">Play</a></li>
                    <li><a href="/Top-10">Top-10</a></li>
                    <li><a href="/Log">Log in</a></li>
                </ul>
            </nav>
        </div>
    );

}
function navConnect(){
    return (
        <div className="Nav">
            <h1>BordGame</h1>
            <nav>
                <ul>
                    <li><a href="/Play">Play</a></li>
                    <li><a href="/Top-10">Top-10</a></li>
                    <li><a href="/Log">Log out</a></li>
                </ul>
            </nav>
        </div>
    );
}
export { navConnect, navDisconnect };
export default navDisconnect;


