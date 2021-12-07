import { useEffect, useState } from "react"
import { getTeams } from "../services/teams"

function Bracket() {
const [loading, setLoading] = useState(true)
const [teams, setTeams] = useState([])
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


const test = async (arr) => {
    if (loading === false) {
        let randomIndex = Math.floor(Math.random() * arr.length)
        return arr[randomIndex]
    }
}
const matchOneArr = []

test(teams)
.then(result => matchOneArr.push(result));

console.log( 'MatchOne', matchOneArr);

if(loading) return <h1>Loading bracket...</h1>

return (
    <>
    <h1>Bracket</h1>
    {/* <ul>
        {matchOne.map((item) => (
            <li>{item.name}</li>
        ))}
    </ul> */}
    </>
)
}

export default Bracket