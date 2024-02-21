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

    const [currentPlayer, setPlayer] = React.useState<string>(player);    // Create the board based on the size
    const [currentLetter, setLetter] = React.useState<string>("W"); // Create the board based on the size

    const handleCellClick = (cel: any) => {
        if (cel.newLetter === "") {
            if (currentPlayer === "B") {
                setPlayer("W");
            }
            else {
                setPlayer("B");
            }
            setLetter(currentPlayer); // Mettre à jour la lettre actuelle avec la lettre du joueur courant
            cel.letter = currentPlayer;
            return cel.letter;
        } else {
            return cel.newLetter;
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
                                <td key={cellIndex}>
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