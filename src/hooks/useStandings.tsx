import { useState, useEffect } from "react";
import { BASE_URL } from "../config/api";
import type { TeamStandingsType } from "fantasy-baseball-ui";

export const useStandings = () => {
  const [standings, setStandings] = useState<TeamStandingsType[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/standings?tournament_id=1`)
      .then((response) => response.json())
      .then((data) => setStandings(data as unknown as TeamStandingsType[]));
  }, []);

  return standings;
};
