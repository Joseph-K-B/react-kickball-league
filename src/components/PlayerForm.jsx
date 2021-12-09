import { useEffect, useState } from "react";
import { getTeams } from "../services/teams";

function PlayerForm({
    name,
    position,
    setName,
    setPosition,
    setTeamId,
    handleSubmit,
    teamId
}) {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        getTeams()
        .then((res) => setTeams(res))
    }, []);
     
    return (
            <>
            <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input
                id='name'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <label htmlFor='position'>Position:</label>
            <input
                id='position'
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)} />
            <label htmlFor='teams'>Team:</label>
            <select aria-label='teams' name='select team' id='teams' value={teams.id} onChange={(e) => setTeamId(e.target.value)}>
                {teams.map((team) => {
                    return (
                        <option
                            name={team.name}
                            value={team.id}
                            key={team.id}
                        >
                            {team.name}
                        </option>
                    );
                })}
            </select>
            <button aria-label='edit player' type="submit">Submit</button>
        </form>
        {/* <p>{teamId}</p> */}
        </>
    );
}
export default PlayerForm;