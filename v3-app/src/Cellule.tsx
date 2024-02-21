import React from 'react';
import './Cellule.css';

interface CelluleProps {
    letter: string;
    ligne: number;
    collum: number;
    player: string;
    handleCellClick: (cel: any) => void; // This is a function that doesn't take any arguments and doesn't return anything
}

const Cellule: React.FC<CelluleProps> = ({ letter, ligne, collum, player, handleCellClick }) => {
    const [newLetter, setLetter] = React.useState<string>(letter); // Create the board based on the size
    const handleClick = (newLetter:string) => {
        
        const updatedLetter = handleCellClick({ newLetter, ligne, collum, player });
        if (typeof updatedLetter === 'string') {
            setLetter(updatedLetter);
            letter = updatedLetter; // Assign updatedLetter to letter
        } else {
            setLetter('');
            letter = ''; // Assign an empty string to letter
        }
    };

    return (
        <div className="Cellule" onClick={() => handleClick(newLetter)}>
            <p id="letter">{newLetter}</p>
        </div>
    );
};

export default Cellule;
