import React, { useEffect } from "react";
import "./Board.css";
import Cellule from "./Cellule";

interface BoardProps {
    ligne: number;
    collum: number;
    player: string;
    type : string;
}

const Board: React.FC<BoardProps> = ({ ligne, collum, player, type }) => {

    const [currentPlayer, setPlayer] = React.useState<string>(player);    
    const [currentLetter, setLetter] = React.useState<string>("W");
    const [usersData, setUsersData] = React.useState(() => {
        const saved = sessionStorage.getItem('user');
        const initialValue = JSON.parse(saved!);
        return initialValue || null;
    });
    const [looser, setLooser] = React.useState<boolean>(false);
    const handleCellClick = (cel: any) => {
        if (cel.newLetter === "" && !looser) {
            if (currentPlayer === "B") {
                setPlayer("W");
            }
            else {
                setPlayer("B");
            }
            setLetter(currentPlayer); 
            cel.letter = currentPlayer;
            return cel.letter;
        } else if (cel.newLetter !== currentPlayer && !looser) {
            setLooser(true);
            sessionStorage.setItem('looser', JSON.stringify(true));
            usersData.nbDefaites+=1;
            setUsersData(usersData);
            sessionStorage.setItem('user', JSON.stringify(usersData));
            return cel.letter;
            
        }
    };
    const board = Array.from({ length: ligne }, () =>
        Array.from({ length: collum }, () => (
            <Cellule
                letter={""}
                ligne={ligne}
                collum={collum}
                player={currentPlayer}
                handleCellClick={handleCellClick}
            />
        ))
    );
    return (
        <div className="board">
            <table>
                <tbody>
                    {board.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} >
                                    <Cellule
                                        letter={cell.props.letter}
                                        ligne={rowIndex}
                                        collum={cellIndex}
                                        player={currentPlayer}
                                        handleCellClick={handleCellClick}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Board;