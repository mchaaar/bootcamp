import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import RowPlayer from '../components/RowPlayer';
import useEndTurn from "../hooks/useEndTurn";
import useHandleDiceThrow from "../hooks/useHandleDiceThrow";

export default function PlayGame() {
    let location = useLocation();

    const [players, setPlayers] = useState(location.state.result.players);
    const [playerThatPlay, setTextPlayerName] = useState(players[0].name);
    const [score, setScore] = useState(0);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [diceAmount, setdiceAmount] = useState(1);
    const { handleDiceThrow } = useHandleDiceThrow();
    const { endTurn } = useEndTurn();
    const [resultWinner, setResultWinner] = useState([]);
    const navigate = useNavigate();

    const sendEndTurn = async () => {
        const result = await endTurn(diceAmount);
        setScore(result.score);
        setTextPlayerName(result.playerThatPlay);
        setPlayers(result.players);
        if (result.winners) {
            setResultWinner(result.winners);
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleDiceSelection = (amount) => {
        setdiceAmount(amount);
        setDropdownOpen(false);
    };

    const backToCreateGame = () => {
        navigate('/');
    };

    const sendHandleDiceThrow = async () => {
        const result = await handleDiceThrow(diceAmount);
        setScore(result.score);
        setTextPlayerName(result.playerThatPlay);
        setPlayers(result.players);
        if (result.winners) {
            setResultWinner(result.winners);
        }
    };

    return (
        <div className="full-screen-center">
            <div className="play-game-container">
                <div className="player-info">
                    <h1>Joueur actuel : {playerThatPlay}</h1>
                    <h2>Score : {score}</h2>
                </div>

                <div className="actions">
                    <button onClick={sendEndTurn}>Finir le Tour</button>
                    <button onClick={sendHandleDiceThrow}>Lancer les dés</button>

                    <div className="dropdown">
                        <button onClick={toggleDropdown} className="dropbtn">Choix des dés</button>
                        {dropdownOpen && (
                            <div className="dropdown-content">
                                <button onClick={() => handleDiceSelection(1)}>1 Dé</button>
                                <button onClick={() => handleDiceSelection(2)}>2 Dés</button>
                                <button onClick={() => handleDiceSelection(3)}>3 Dés</button>
                            </div>
                        )}
                    </div>
                </div>

                <p>{diceAmount} {diceAmount === 1 ? "dé sélectionné" : "dés sélectionnés"}</p>

                <div className="scoreboard">
                    <table>
                        <caption>ScoreBoard</caption>
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {players.map((player) => (
                                <RowPlayer key={player.id} player={player} />
                            ))}
                        </tbody>
                    </table>
                </div>

                {resultWinner && resultWinner.length > 0 && (
                    <div className="winner-table">
                        <table>
                            <caption>Gagnant(s)</caption>
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {resultWinner.map((item) => (
                                    <RowPlayer key={item.player.id} player={item.player} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                <button onClick={backToCreateGame} className="back-button">Créer une nouvelle partie</button>
            </div>
        </div>
    );
}
