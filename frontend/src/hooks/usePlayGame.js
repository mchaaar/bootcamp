import { useEffect, useState } from "react";

function usePlayGame(game_id){
    const [game_data, setGameData] = useState({});

    useEffect(() => {}, []);

    const getGame = () = {};

    useEffect(() => {
        getGame(game_id);
    }, [game_id])
}