export default function PlayerRow({ player }) {
    return (<tr><th scope="row">{player.name}</th><td>{player.score}</td></tr>)
}
