import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTeamById } from "../../services/teams";

function TeamDetail() {
    const { id } = useParams()
    const[team, setTeam] = useState(null)

    useEffect(() => {
        getTeamById(id).then((res) => setTeam(res))
    }, [id])

    if(!team) return <h2>Loading team...</h2>

    return(
        <>
        <h1>{team.name}</h1>
        <h3>{team.city}, {team.state}</h3>
        <ul>
        {team.players.map((player) => (
            <li key={player.id}>
                <Link to={`/players/${player.id}`}>
                    <p>{player.position} - {player.name}</p>
                </Link>
            </li>
        ))}
        </ul>

        </>
    )
}

export default TeamDetail