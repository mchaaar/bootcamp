import { useState } from 'react';
import useCreateGame from "../hooks/useCreateGame";

export default function PlayerCreation(){
    const { createGame } = useCreateGame()
    const [newName, setNewName] = useState('');
    const [gameName, setGameName] = useState('');
    const [players, setPlayers] = useState([]);

    const handleAddPlayer = () => {
        if (newName.trim()) {
            setPlayers([...players, newName]);
            setNewName('');
        }
    };

    return (
        <div>
            <h2>Nom de la partie</h2>
            <input
                type="text"
                placeholder="Entrer le nom de la partie"
                value={gameName}
                onChange={(e) => setGameName(e.target.value)}
            />

            <h3>Liste des joueurs</h3>
            <input
                type="text"
                placeholder="Entrer le nom du joueur"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
            />
            
            <button onClick={handleAddPlayer}>Ajouter un joueur</button>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {player}
                    </li>
                ))}
            </ul>
            <button onClick={() => createGame(players, gameName)}>create game</button>
        </div>
    );
};
