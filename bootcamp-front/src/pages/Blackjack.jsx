import { useLocation } from "react-router-dom";
import { useState } from "react";
import PlayerRow from "../components/PlayerRow";

export default function Blackjack() {
    let location = useLocation();
    const [players, setPlayers] = useState(location.state.result.players);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [diceAmount, setdiceAmount] = useState(1);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleDiceSelection = (amount) => {
        setdiceAmount(amount);
        setDropdownOpen();
    };

    return <>
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
        <p>{diceAmount} {diceAmount === 1 ? "dé sélectionné" : "dés sélectionnés"}</p>
        <table>
            <caption>
                Player
            </caption>
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Score</th>
                </tr>
            </thead>
            <tbody>
                {players.map((player) => (
                    <PlayerRow key={player.id} player={player} />
                ))}
            </tbody>
        </table>
    </>
}
