export default function useCreateGame() {
    const createGame = () => {
        fetch("http://localhost:8000/api/start_game/", {
            method: "POST",
            body: {
                name: "game_name",
                players: ["toto", "tata"],
            },
        }).then((response) => {
            console.log(response);
        }).catch((reason) => {
            console.error(reason);
        });
    };

    return { createGame };
}