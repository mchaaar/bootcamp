export default function Row({ player }) {
    return (
        <tr>
            <td>{player.id}</td>
            <td>{player.score}</td>
            <td>{player.name}</td>
        </tr>
    )
}
