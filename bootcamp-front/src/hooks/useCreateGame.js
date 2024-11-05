export default function useCreateGame() {
    const createGame = () => {
        fetch("http://localhost:8000/apiGame/create_game", {
            method: "POST",
            headers: {
                Accept: "application,/json",
                "Content-Type": "application-json"
            },
            body: JSON.stringify({
                game_name: "game_name",
                players: ["toto", "tata"],
            }),
        }).then((data) => {
            console.log(data);
        })  
        .catch((reason) => {
            console.error(reason);
        });
    };

    return { createGame };
}