
import batting from '../data/json/stats/battingStats.json'
import pitching from '../data/json/stats/pitchingStats.json'

export const usePlayerStats = () => {
    return { battingLeaders: batting, pitchingLeaders: pitching };
}