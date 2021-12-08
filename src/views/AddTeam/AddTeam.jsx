import { useState } from "react"
import { useHistory } from "react-router-dom"

function AddTeam() {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const histor = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // const res = await createTeam({name, sity, state})
        // history.pushState(`/teams/${res[0].id}`)
    }

    return(
        <>
        <fieldset>
            <legend>Add Team</legend>
            <form>
                <label htmlFor='name'>Name:</label>
                <input id='name' type="text" value={name} onChange={({target}) => setName(target.value)}/>

                <label htmlFor='city'>City:</label>
                <input id='city' type="text" value={city} onChange={({target}) => setCity(target.value)}/>

                <label htmlFor='state'>State:</label>
                <input id='state' type="text" value={state} onChange={({target}) => setState(target.value)}/>

                <button aria-label='add team' type="submit" onSubmit={handleSubmit}>Add</button>
            </form>
        </fieldset>
        </>
    )
}

export default AddTeam;