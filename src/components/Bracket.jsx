import { useEffect, useState } from "react"
import { getTeams } from "../services/teams"
import { shuffle, setRandomMatch } from "../utils/randomizeTeams"
import BracketControls from "./BracketControls"
import "./Bracket.css"

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

const handleShuffleClick = async (e) => {
    e.preventDefault();
    setBracket([])
    await getTeams()     
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

if(loading) return <h1>Loading bracket...</h1>

return (
    <>
    <h1>Bracket</h1>
    <section className="bracketSection">
        <section className="controlSection">
            <BracketControls
                className="controls"
                handleResetClick={handleResetClick} 
                handleShuffleClick={handleShuffleClick}
                handleMatchClick={handleMatchClick}
                />
            <div>
                <ul>
                    {bracket.map((item) => (
                        <li key={item.id}>{item.name}</li>
                        ))}
                </ul>
            </div>
        </section>
        <section className="matchSection">
            <div className="matchDiv" aria-label="matchOne">
                <h1>Match One:</h1>
                <ul>
                    {matchOne.map((item) => (
                        <li key={item.id}>{item.name}</li>
                        ))}
                </ul>
            </div>
            <div className="matchDiv" aria-label="matchTwo">
                <h1>Match Two:</h1>
                <ul>
                    {matchTwo.map((item) => (
                        <li key={item.id}>{item.name}</li>
                        ))}
                </ul>
            </div>
            <div className="matchDiv" aria-label="matchThree">   
                <h1>Match Three:</h1>
                <ul>
                    {matchThree.map((item) => (
                        <li key={item.id}>{item.name}</li>
                        ))}
                </ul>
            </div>
        </section>
    </section>
    </>
)
}

export default Bracket