import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getPlayerById } from "../../services/players"

function PlayerDetail() {
    const{ id } = useParams()
    const[player, setPlayer] = useState(null)

    useEffect(() => {
        getPlayerById(id).then((res) => setPlayer(res))
    }, [id])

    if(!player) return <h2>Loading player info...</h2>

    return(
        <>
        <h1>{player.name}</h1>
        <h3>{player.teams.name}</h3>
        <h3>{player.teams.city}, {player.teams.state}</h3>
        <h3>{player.position}</h3>
        </>
    )
}
export default PlayerDetail