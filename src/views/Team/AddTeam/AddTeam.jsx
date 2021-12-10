import { useState } from "react"
import { useHistory } from "react-router-dom"
import TeamForm from "../../../components/TeamForm";
import { createTeam } from "../../../services/teams";

function AddTeam() {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const history = useHistory();

    const handleAddSubmit = async (e) => {
        e.preventDefault();
        const res = await createTeam({name, city, state})
        history.push(`/teams/${res[0].id}`)
    }

    return(
        <>
        <fieldset>
            <legend>Add Team</legend>
            <TeamForm 
                name={name}
                city={city}
                state={state}
                handleSubmit={handleAddSubmit}
                setName={setName}
                setCity={setCity}
                setState={setState}
            />
        </fieldset>
        </>
    )
}

export default AddTeam;