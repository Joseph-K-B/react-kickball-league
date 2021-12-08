import { useEffect, useState } from "react"
import { getTeams } from "../services/teams"
import randomizeTeams from "../utils/randomizeTeams"

function Bracket() {
const [loading, setLoading] = useState(true)
const [teams, setTeams] = useState([])
// const [bracket, setBracket] = useState([])
// const [matchOne, setMatchOne] = useState([])
// const [matchOne, setMatchOne] = useState([])
// Use State for each matchup, need malleable array 
//to remove indices and avoid repetition
//randomize function needs called conditionally or onClick
//steer clear of use effect without dependency for random function

useEffect(() => {
    getTeams()
    .then((res) => setTeams(res))
    .finally(() => setLoading(false))
}, [])

let bracket = [...teams]



// const matchThreeArr = []


// const handleShuffleClick = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     randomizeTeams(bracket, matchOneArr)
    // .then((result) => 
    //  matchOneArr.push(result)
    //  [...matchOne, result]
    // )
    // .finally(() => {
    //     setLoading(false)
    // })
    // return matchOneArr;
// }

// console.log('MATCH ONE ARRAY', matchOneArr)

if(loading) return <h1>Loading bracket...</h1>

return (
    <>
    <h1>Bracket</h1>
    <button onClick ={() => randomizeTeams(bracket) && console.log('BRACKET', bracket)}>Shuffle Team</button>
    <ul>
        {bracket.map((item) => (
            <li>{item.name}</li>
            ))}
        </ul>
    </>
)
}

export default Bracket