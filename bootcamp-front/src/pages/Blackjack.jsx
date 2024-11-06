import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Blackjack(){
    let location = useLocation();
    const tempLoc = location.state.result;

    console.log("tempLoc players :");
    console.log(tempLoc.players);

    const [players, setPlayers] = useState(tempLoc.players);

    console.log("useState players :");
    console.log(players);

    return <h1>Blackjack</h1>;
}
