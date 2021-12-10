import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { deleteTeamById, getTeams } from '../../../services/teams';

function TeamList() {
    const [loading, setLoading] = useState(true);
    const [teams, setTeams] = useState([]);

    const reloadTeams = async () => {
        setLoading(true);
        const res = await getTeams();
        setTeams(res);
        setLoading(false);
    }

    useEffect(() => {
        getTeams()
        .then((res) => setTeams(res))
        .finally(() => setLoading(false))
    }, [])

    const handleDelete = async ({ id, name }) => {
        // eslint-disable-next-line no-restricted-globals
        const confirmDelete = confirm(`Would you like to remove ${name} from this seasons roster?`);

        if(confirmDelete) {
            await deleteTeamById(id);
            await reloadTeams();
        }
    };

    if(loading) return <h1>Loading teams...</h1>
    
    return (
        <>
        <h1>Team List</h1>
        <ul>
            {teams.map((team) => {
                return (
                    <li key={team.id}>
                        <Link className='link' to={`/teams/${team.id}`}>
                        <p>{team.name}</p>
                        </Link>
                        <button
                            type="button"
                            aria-label={`Delete ${team.name}`}
                            onClick={() => handleDelete({ id: team.id, name: team.name})}
                        >
                            Delete
                        </button>
                        <Link to={`/teams/${team.id}/update`}>
                        <button
                            type="button"
                            aria-label={`Update ${team.name}`}
                        >
                            Update
                        </button>
                        </Link>
                    </li>
                    )
                })}
            </ul>            
            <Link className='link' to='/teams/new'><p>Add Team</p></Link>
            </>
    )
}

export default TeamList