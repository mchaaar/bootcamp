import useCreateGame from "../hooks/useCreateGame";

export default function Home(){
    const { createGame } = useCreateGame()
    return (
        <>
            <h1>Home</h1>
            <button onClick={() => createGame()}>create game</button>
        </> 
    )
}
