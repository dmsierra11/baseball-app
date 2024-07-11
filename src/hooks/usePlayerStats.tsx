
import batting from '../data/batting.json'
import pitching from '../data/pitching.json'

export const usePlayerStats = () => {

    return { battingLeaders: batting, pitchingLeaders: pitching };
}