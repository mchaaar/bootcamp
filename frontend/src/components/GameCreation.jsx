import { useState } from 'react';
import useCreateGame from "../hooks/useCreateGame";
import { useNavigate } from "react-router-dom";

export default function GameCreation() {
    const [newName, setNewName] = useState('');
    const [gameName, setGameName] = useState('');
    const [players, setPlayers] = useState([]);
    const { createGame } = useCreateGame();
    const navigate = useNavigate();

    const handleAddPlayer = () => {
        if (newName.trim()) {
            setPlayers([...players, newName]);
            setNewName('');
        }
    };

    const handleCreateGame = () => {
        createGame(players, gameName)
            .then((result) => {
                navigate("/playGame", { state: { result } });
            })
            .catch((error) => {
                console.error("Game creation failed:", error);
            });
    };

    return (
        <div className="game-creation-container">
            <div className="content-wrapper">
                <h1 className="main-title">Blackjack</h1>
                <h2 className="secondary-title">Création de la partie</h2>
                <p className="welcome-text">
                    Bienvenue, vous pouvez jouer en entrant le nom de la partie ainsi que les noms des joueurs, bonne chance !
                </p>

                <div className="creation-card">
                    <h2>Liste des joueurs</h2>
                    <input
                        type="text"
                        placeholder="Entrer le nom de la partie"
                        value={gameName}
                        onChange={(e) => setGameName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Entrer le nom du joueur"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                    
                    <button onClick={handleAddPlayer}>Ajouter le joueur</button>
                    <ul className="player-list">
                        {players.map((player, index) => (
                            <li key={index}>{player}</li>
                        ))}
                    </ul>

                    <button onClick={handleCreateGame}>Créer la partie</button>
                </div>
            </div>
        </div>
    );
}
