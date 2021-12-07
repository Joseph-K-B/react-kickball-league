import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getPlayers } from "../../services/players"

function PlayerList() {
    // const { id } = useParams()
    const[loading, setLoading] = useState(true)
    const [players, setPlayers] = useState([])

    useEffect(() => {
        getPlayers()
        .then((res) => setPlayers(res))
        .finally(() => setLoading(false))
    }, [])

    if(loading) return <h1>Loading Players...</h1>

    return(
        <>
        <h1>Player List</h1><ul>
            {players.map((player) => (
                <li key={player.id}>
                    <Link to={`/players/${player.id}`}>
                        <p>{player.name}</p>
                    </Link>
                </li>
            ))}
        </ul>
        </>
    )
}

export default PlayerList