import React from 'react'
import type { TeamStandingsType } from 'fantasy-baseball-ui'
import standings from '../data/standings.json'

export const useStandings = () => {
    // const [teamStandings, setTeamStandings] = React.useState<TeamStandings[]>([])

    // React.useEffect(() => {
    //     setTeamStandings(standings)
    // }, [])

    return standings;
}