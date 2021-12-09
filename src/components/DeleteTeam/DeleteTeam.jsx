// import { useState } from "react";
// import { deleteTeamById, getTeams } from "../../services/teams";

// function DeleteTeam({
//     id,
//     name,
//     teams,
//     setTeams

// }) {
//     const [loading, setLoading] = useState(true);
//     const [teams, setTeams] = useState([]);

//     const reloadTeams = async () => {
//         setLoading(true);
//         const res = await getTeams();
//         setTeams(res);
//         setLoading(false);
//     }

//     const handleDelete = async ({ id, name }) => {
//         // eslint-disable-next-line no-restricted-globals
//         const confirmDelete = confirm(`Would you like to remove ${name} from this seasons roster?`);

//         if(confirmDelete) {
//             await deleteTeamById(id);
//             await reloadTeams();
//         }

//         return (
//             <button
//                 type="button"
//                 aria-label={`Delete ${team.name}`}
//                 onClick={() => handleDelete({ id: team.id, name: team.name})}
//             ></button>
//         )
//     };
// }

// export default DeleteTeam;