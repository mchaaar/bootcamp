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
        }).then((response) => {
            if (!response.ok){
                throw new Error("Network response was not okay");
            }
            return response.json();
        }).then((data) => {
            console.log(data);
        })  
        .catch((reason) => {
            console.error(reason);
        });
    };

    return { createGame };
}