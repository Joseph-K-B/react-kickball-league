import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getPlayers, deletePlayerById } from "../../services/players"

function PlayerList() {
    const[loading, setLoading] = useState(true)
    const [players, setPlayers] = useState([])

    const reloadPlayers = async () => {
        setLoading(true);
        const res = await getPlayers();
        setPlayers(res);
        setLoading(false);
    }

    useEffect(() => {
        getPlayers()
        .then((res) => setPlayers(res))
        .finally(() => setLoading(false))
    }, []);

    const handlePlayerDelete = async ({id, name}) => {
        // eslint-disable-next-line no-restricted-globals
        const confirmPlayerDelete = confirm(`Would you like to remove ${name} from this seasons roster?`)

        if(confirmPlayerDelete) {
            await deletePlayerById(id);
            await reloadPlayers();
        }
    };

    if(loading) return <h1>Loading players...</h1>
    console.log(players)

    return(
        <>
        <h1>Player List</h1>
        <ul>
            {players.map((player) => (
                <li key={player.id}>
                    <Link className='link' to={`/players/${player.id}`}>
                        <p>{player.name}</p>
                    </Link>
                        <button
                            type="button"
                            aria-label={`Delete ${player.name}`}
                            onClick={() => handlePlayerDelete({ id: player.id, name: player.name})}
                        >
                        Delete
                    </button>
                    <Link to={`/players/${player.id}/update`}>
                        <button
                            type="button"
                            aria-label={`Update ${player.name}`}
                        >
                            Update
                        </button>
                    </Link>
                </li>
            ))}
        </ul>
        <Link className='link' to='/players/new'><p>Add Player</p></Link>
        </>
    )
}

export default PlayerList