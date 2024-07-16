import { useState, useEffect } from 'react';
import type { MatchType } from 'fantasy-baseball-ui'
import { BASE_URL } from '../config/api';

export const useUpcomingMatches = () => {
    const [matches, setMatches] = useState<MatchType[]>([]);

    useEffect(() => {
        fetch(`${BASE_URL}/games?type=upcoming`)
            .then((response) => response.json())
            .then((data) => setMatches(data as unknown as MatchType[]));
    }, []);

    return matches;
};