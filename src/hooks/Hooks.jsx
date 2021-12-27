import {useState, useEffect } from "react"
import { getTeams } from "../services/teams"

const useFetch = () => {
    // const [loading, setLoading] = useState(true)
    const [teams, setTeams] = useState(null)

    useEffect(() => {
        getTeams()
        .then((res) => setTeams(res))
        .then((teams) => setTeams(teams))
        // .finally(() => setLoading(false))
    }, [])

    return [teams]
}

export default useFetch