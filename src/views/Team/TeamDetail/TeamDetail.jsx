import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTeamById } from "../../../services/teams";

function TeamDetail() {
    const { teamId } = useParams()
    const[team, setTeam] = useState(null)

    useEffect(() => {
        getTeamById(teamId).then((res) => setTeam(res))
    }, [teamId])

    if(!team) return <h2>Loading team...</h2>

    return(
        <>
        <h1>{team.name}</h1>
        <h3>{team.city}, {team.state}</h3>
        <p>Wins: {team.wins}</p>
        <ul>
        {team.players.map((player) => (
            <li key={player.id}>
                <Link className='link' to={`/players/${player.id}`}>
                    <p>{player.position} - {player.name}</p>
                </Link>
            </li>
        ))}
        </ul>
        <Link className='link' to='/teams'><p>Team Directory</p></Link>
        </>
    )
}

export default TeamDetail