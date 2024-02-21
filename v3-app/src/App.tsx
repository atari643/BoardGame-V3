import React, { useState } from "react";
import Login from "./Login";
import Crush from "./Crush";
import Fill from "./Fill";
import Nav from "./Nav";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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

    return (
        <div>
            {isAllowedPath() ? (
                <div>
                    <h1>Please log in to Access BoardGames </h1>
                    {isLoggedIn ? (
                        <div>
                            <h2>Welcome to BoardGames</h2>
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
                        </div>
                    ) : (
                        <Login isAuthenticated={isLoggedIn} setIsAuthenticated={setIsLoggedIn} />
                    )}
                </div>
            ) : null}
        </div>
    );
}

export default App;