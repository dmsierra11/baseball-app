import { useState, useEffect } from 'react';
// import { getUpcomingMatches } from '../services/api';
import type { MatchType } from 'fantasy-baseball-ui'
import gameResults from '../data/json/games/gameResults.json'

export const useGameResults = () => {
    const [matches, setMatches] = useState<MatchType[]>([]);

    useEffect(() => {
        setMatches(gameResults as unknown as MatchType[]);
    }, []);

    return matches;
};