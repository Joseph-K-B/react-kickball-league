import { useEffect, useState } from "react"
import { getTeams } from "../services/teams"
import { shuffle, setRandomMatch } from "../utils/randomizeTeams"
// import randomizeTeams from "../utils/randomizeTeams"

function Bracket() {
const [loading, setLoading] = useState(true)
const [teams, setTeams] = useState([])
const [bracket, setBracket] = useState([])
const [matchOne, setMatchOne] = useState([])
const [matchTwo, setMatchTwo] = useState([])
const [matchThree, setMatchThree] = useState([])

useEffect(() => {
    getTeams()
    .then((res) => setTeams(res))
    .finally(() => setLoading(false))
}, [])


const handleResetClick = async (e) => {
    e.preventDefault();
    setLoading(true)
    await getTeams()
    .then((res) => setTeams(res))
    .finally(() => {
        setBracket([])
        setMatchOne([])
        setMatchTwo([])
        setMatchThree([])
        setLoading(false)
    })
    return;
}

//could await fetch for teams onClick
// shuffle teams
// .then setBracket  
// finally resolve promise to empty match states
// this would allow for multiple shuffles
// list doesn't re-render b/c state is still the same(randomized)
const handleShuffleClick = (e) => {
    e.preventDefault();
    setLoading(true); 
    const random = shuffle(teams)
        setBracket(random)
        setLoading(false)
    return;
}

const handleMatchClick = (e) => {
    e.preventDefault();
    setLoading(true)
    setRandomMatch(bracket)
    .then((value) => {
        if(matchOne.length < 2) {
            setMatchOne(value)
        } else if (matchTwo.length !== 2) {
            setMatchTwo(value)
        } else if (matchThree.length !== 2) {
            setMatchThree(value)
        }
    })
    setLoading(false)
    return;
}

console.log(
    // 'TEAMS', teams
    'BRACKET', bracket,
    // 'MATCH ONE', match,
    // 'MATCH TWO', matchTwo,
    // 'MATCH THREE', matchThree
    )

if(loading) return <h1>Loading bracket...</h1>

return (
    <>
    <h1>Bracket</h1>
    <button onClick ={handleResetClick}>Reset</button>
    <button onClick ={handleShuffleClick}>Shuffle Teams</button>
    <button onClick = {handleMatchClick}>Set Match</button>
    <ol>
        {bracket.map((item) => (
            <li key={item.id}>{item.name}</li>
            ))}
    </ol>
    <div>
        <h1>Match One:</h1>
        <ul>
            {matchOne.map((item) => (
                <li key={item.id}>{item.name}</li>
                ))}
        </ul>
    </div>
    <div>
        <h1>Match Two:</h1>
        <ul>
            {matchTwo.map((item) => (
                <li key={item.id}>{item.name}</li>
                ))}
        </ul>
    </div>
    <div>   
        <h1>Match Three:</h1>
        <ul>
            {matchThree.map((item) => (
                <li key={item.id}>{item.name}</li>
                ))}
        </ul>
    </div>
    </>
)
}

export default Bracket