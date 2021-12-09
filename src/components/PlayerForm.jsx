import { useEffect, useState } from "react";
import { getTeams } from "../services/teams";

function PlayerForm({
    name,
    position,
    teamId,
    setName,
    setPosition,
    setTeamId,
    handleAddPlayerSubmit,
}) {
    // const [loading, setLoading] = useState(true);
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        getTeams()
        .then((res) => setTeams(res))
        // .finally(() => setLoading(false))
    }, []);

    // if(loading) return <h1>Loading Form...</h1>
     
    return (
        <>
            <form onSubmit={handleAddPlayerSubmit}>
                <label>Name:</label>
                <input
                    id='name' 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Position:</label>
                <input
                    id='position' 
                    type="text" 
                    value={position} 
                    onChange={(e) => setPosition(e.target.value)}
                />
                <label>Team:</label>
                <select value={teams.id} onChange={(e) => setTeamId(e.target.value)}>
                    {teams.map((team) => {
                        return (
                            <option 
                                value={team.id} 
                                key={team.id}
                            >
                                {team.name}
                            </option>
                        )
                    })}
                </select>
                <button aria-label='add player' type="submit">Submit</button>
            </form>
            <p>{teamId}</p>
        </>
    );
}
export default PlayerForm;