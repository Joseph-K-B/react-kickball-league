import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { getTeams } from '../../services/teams';

function TeamList() {
    const [loading, setLoading] = useState(true);
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        getTeams()
        .then((res) => setTeams(res))
        .finally(() => setLoading(false))
    }, [])

    if(loading) return <h1>Loading Teams...</h1>
    
    return (
        <>
        <h1>Team List</h1>
        <ul>
            {teams.map((team) => (
                <li key={team.id}>
                    <Link to={`/teams/${team.id}`}>
                    <p>{team.name}</p>
                    </Link>
                </li>
            ))}
        </ul>
        </>
    )
}

export default TeamList