import { useState } from "react"
import { useHistory } from "react-router-dom"
import { createPlayer } from "../../../services/players";
import PlayerForm from "../../../components/PlayerForm";

function AddPlayer() {
    const [name, setName] = useState('');
    const [position, setPosition]= useState('');
    const [teamId, setTeamId] = useState(null);
    const history = useHistory();

    
    

    const handleAddPlayerSubmit = async (e) => {
        e.preventDefault();
        console.log('TEAM ID', teamId);
        const res = await createPlayer({name, position, teamId})
        history.push(`/players/${res[0].id}`)
    }

    // console.log(teamId);

    return(
        <>
        <fieldset>
            <legend>Add Player</legend>
            <PlayerForm 
                handleSubmit={handleAddPlayerSubmit}
                name={name}
                position={position}
                teamId={teamId}
                setName={setName}
                setPosition={setPosition}
                setTeamId={setTeamId}
            />
        </fieldset>
        </>
    )
}

export default AddPlayer;