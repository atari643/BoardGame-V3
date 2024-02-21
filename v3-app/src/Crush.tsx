import React from "react";
import "./Board.css";
import Board from "./Board";

interface GameProps {
    ligne: number;
    collum: number;
    player: string;
}
const Crush = ({ ligne, collum, player="W" }: GameProps) => {
    return (
        <div>
            <Board ligne={ligne} collum={collum} player={player} type="Crush" />
        </div>
    );
}
export default Crush;