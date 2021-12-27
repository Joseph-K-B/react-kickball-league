import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import TeamForm from "../../../components/TeamForm";
import { getTeamById, updateTeamById } from "../../../services/teams";


function UpdateTeam() {
    const { teamId } = useParams();
    const [team, setTeam] = useState(null);
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const history = useHistory();

    useEffect(() => {
        getTeamById(teamId).then((res) => setTeam(res))
    }, [teamId]);

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        const res = await updateTeamById( teamId, {name, city, state})
        history.push(`/teams/${res[0].id}`)
    };

    if(!team) return <h2>Loading Team...</h2>

    return (
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
        <fieldset>
            <legend>Update Team</legend>
            <TeamForm 
                name={name}
                city={city}
                state={state}
                handleSubmit={handleUpdateSubmit}
                setName={setName}
                setCity={setCity}
                setState={setState}
            />
        </fieldset>
        <Link className='link' to='/teams'>
            <p>Team Directory</p>
        </Link>        
        </>
    )
}

export default UpdateTeam;