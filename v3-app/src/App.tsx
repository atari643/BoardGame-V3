import React, { useEffect, useState } from "react";
import Login from "./Login";
import Crush from "./Crush";
import Fill from "./Fill";

interface AppProps {
    userData: any;
    logged: boolean;

}

function App({ userData, logged }: AppProps) {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const saved = sessionStorage.getItem('isLoggedIn');
        const initialValue = JSON.parse(saved!);
        return initialValue || logged;
    });
    const [usersData, setUsersData] = useState(() => {
        const saved = sessionStorage.getItem('user');
        const initialValue = JSON.parse(saved!);
        return initialValue || userData;
    });
    const [looser, setLooser] = useState(()=>{
        const saved = sessionStorage.getItem('looser');
        const initialValue = JSON.parse(saved!);
        return initialValue || false;
    });
    const [selectedGame, setSelectedGame] = useState("");
    const [selectedDifficulty, setSelectedDifficulty] = useState("");

    const handleGameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedGame(event.target.value);
    };

    const handleDifficultyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDifficulty(event.target.value);
    };

    const isAllowedPath = () => {
        const allowedPaths = ["/Play"];
        return allowedPaths.includes(window.location.pathname);
    };
    useEffect(() => {
        console.log(sessionStorage.getItem('looser'));
        if (sessionStorage.getItem('looser')) {
            setLooser(false);
        }

    });
    return (
        <div>
            {isAllowedPath() ? (
                <div>
                    {isLoggedIn ? (
                        <div>
                            <h2>Welcome to BoardGames</h2>
                            <p className="loginName">Welcome {usersData.login}</p>
                            <p className="victory">Victories: {usersData.nbVictoires}</p>
                            <p className="defeat">Defeats: {usersData.nbDefaites}</p>
                            <p>Here you can play all the board games you want</p>
                            <select value={selectedGame} onChange={handleGameChange}>
                                <option value="Choose">Choose a game</option>
                                <option value="Crush">Crush</option>
                                <option value="Fill">Fill</option>
                            </select>
                            <select value={selectedDifficulty} onChange={handleDifficultyChange}>
                                <option value="Choose">Choose a difficulty</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                            {selectedGame === "Crush" && selectedDifficulty === "Easy" && (
                                <Crush ligne={3} collum={3} player={"B"} />
                            )}
                            {selectedGame === "Crush" && selectedDifficulty === "Medium" && (
                                <Crush ligne={5} collum={5} player={"B"} />
                            )}
                            {selectedGame === "Crush" && selectedDifficulty === "Hard" && (
                                <Crush ligne={7} collum={7} player={"B"} />
                            )}
                            {selectedGame === "Fill" && selectedDifficulty === "Easy" && (
                                <Fill ligne={3} collum={3} player={"B"} />
                            )}
                            {selectedGame === "Fill" && selectedDifficulty === "Medium" && (
                                <Fill ligne={5} collum={5} player={"B"} />
                            )}
                            {selectedGame === "Fill" && selectedDifficulty === "Hard" && (
                                <Fill ligne={7} collum={7} player={"B"} />
                            )}
                            {looser ? (<div className="looser">You lost <button onClick={() => window.location.reload()}>Play again</button></div>) : null}
                        </div>
                    ) : (
                        <Login setIsAuthenticated={setIsLoggedIn} setUserData={(userData: any) => setUsersData(userData)} />
                    )}
                </div>
            ) : null}
        </div>
    );
}

export default App;