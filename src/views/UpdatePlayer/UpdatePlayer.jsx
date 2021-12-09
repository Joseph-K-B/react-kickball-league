import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PlayerUpdateForm from "../../components/PlayerUpdateForm";
import { getPlayerById, updatePlayerById } from "../../services/players";



function UpdatePlayer() {
    const { id } = useParams();
    const [player, setPlayer] = useState([])
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const history = useHistory();

    useEffect(() => {
        getPlayerById(id).then((res) => setPlayer(res))
    }, [id]);

    const handleUpdatePlayerSubmit = async (e) => {
        e.preventDefault();
        const res = await updatePlayerById( id, {name, position})
        history.push(`/players/${res[0].id}`)
    };

    if(!player) return <h2>Loading Player...</h2>

    return (
        <>
        <h1>{player.name}</h1>
        <h3>{player.position}</h3>
        <fieldset>
            <legend>Update Player</legend>
            <PlayerUpdateForm
                handleSubmit={handleUpdatePlayerSubmit}
                name={name}
                position={position}
                setName={setName}
                setPosition={setPosition}
            />
        </fieldset>
        <Link className='link' to='/players'>
            <p>Player Directory</p>
        </Link>
        </>
    )
}
export default UpdatePlayer;