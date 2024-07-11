import { useState, useEffect } from 'react';
// import { getUpcomingMatches } from '../services/api';
import type { MatchType } from 'fantasy-baseball-ui'
import upcomingMatches from '../data/upcomingMatches.json'

export const useUpcomingMatches = () => {
    const [matches, setMatches] = useState<MatchType[]>([]);

    useEffect(() => {
        setMatches(upcomingMatches as unknown as MatchType[]);
    }, []);

    return matches;
};