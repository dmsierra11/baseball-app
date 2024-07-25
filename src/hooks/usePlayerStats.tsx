import { useState, useEffect } from 'react';
import { BASE_URL } from '../config/api';
import { PlayerStatsType } from 'fantasy-baseball-ui';

export const usePlayerStats = () => {
    const [battingLeaders, setBattingLeaders] = useState<PlayerStatsType[]>([]);
    const [pitchingLeaders, setPitchingLeaders] = useState<PlayerStatsType[]>([]);
    // console.log(battingLeaders);
    // console.log(pitchingLeaders);
    useEffect(() => {
        fetch(`${BASE_URL}/batting_stats`)
            .then((response) => response.json())
            .then((data) => setBattingLeaders(data as unknown as PlayerStatsType[]));

        fetch(`${BASE_URL}/pitching_stats`)
            .then((response) => response.json())
            .then((data) => setPitchingLeaders(data as unknown as PlayerStatsType[]));
    }, []);
    return {
        battingLeaders, pitchingLeaders
    };
}