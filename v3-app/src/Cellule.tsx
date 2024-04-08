import React from 'react';
import './Cellule.css';

interface CelluleProps {
    letter: string;
    ligne: number;
    collum: number;
    player: string;
    handleCellClick: (cel: any) => void; 
}

const Cellule: React.FC<CelluleProps> = ({ letter, ligne, collum, player, handleCellClick }) => {
    const [newLetter, setLetter] = React.useState<string>(letter); 
    const handleClick = (newLetter:string) => {
        
        const updatedLetter = handleCellClick({ newLetter, ligne, collum, player });
        if (typeof updatedLetter === 'string') {
            setLetter(updatedLetter);
            letter = updatedLetter; 
        } 
    };

    return (
        <div className="Cellule" onClick={() => handleClick(newLetter)}>
            <p id="letter">{newLetter}</p>
        </div>
    );
};

export default Cellule;
