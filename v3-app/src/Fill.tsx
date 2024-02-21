import React from "react";
import "./Board.css";
import Board from "./Board";

interface GameProps {
    ligne: number;
    collum: number;
    player: string;
}
const Fill = ({ ligne, collum, player="W" }: GameProps) => {
    return (
        <div>
            <Board ligne={ligne} collum={collum} player={player} type="Fill" />
        </div>
    );
}
export default Fill;