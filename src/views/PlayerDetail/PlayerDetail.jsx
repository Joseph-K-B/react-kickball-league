import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getPlayerById } from "../../services/players"
import { getTeams } from "../../services/teams";

function PlayerDetail() {
    const{ id } = useParams()
    const[player, setPlayer] = useState(null);
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        getPlayerById(id)
        .then((res) => setPlayer(res))
    }, [id])

    if(!player) return <h2>Loading player info...</h2>

    return(
        <>
        <h1>{player.name}</h1>
        <Link className='link' to={`/teams/${player.teams.id}`}>
            <h3>{player.teams.name}</h3>
        </Link>
        <h3>{player.teams.city}, {player.teams.state}</h3>        
        <h3>{player.position}</h3>
        <Link className='link' to='/players'><p>Player Directory</p></Link>
        </>
        
    )
}
export default PlayerDetail