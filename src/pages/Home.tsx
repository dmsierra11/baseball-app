import React from "react";
import {
  TopStory,
  Standings,
  LatestNews,
  PlayerStats,
  GamesList,
  Grid,
  Stack,
} from "fantasy-baseball-ui";
import { useLatestNews, useUpcomingMatches, usePlayerStats, useStandings, useGameResults } from "../hooks";

const Home: React.FC = () => {
  const news = useLatestNews();
  const matches = useUpcomingMatches();
  const { battingLeaders, pitchingLeaders } = usePlayerStats();
  const standings = useStandings();
  const gameResults = useGameResults();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={8}>
        <Stack spacing={2}>
          <div>
            <TopStory
              imageUrl={
                "https://img.mlbstatic.com/mlb-images/image/upload/t_16x9/t_w2208/mlb/wcjnkef8uossisdctcwd.jpg"
              }
              imageAlt={"Pittsburgh Penguins vs Baltimore Orioles"}
              headline={"Pittsburgh Penguins vs Baltimore Orioles"}
              description={"Pittsburgh Penguins vs Baltimore Orioles"}
              link={
                "https://www.mlb.com/news/news/article/2024/03/01/103-nyy-baltimore-orioles-game-news-and-updates"
              }
            />
          </div>
          <GamesList games={gameResults} sectionTitle={"Ultimos Resultados"} component="div" />
          <GamesList games={matches} sectionTitle={"Próximos Partidos"} component="div" />
          <PlayerStats players={battingLeaders} sectionTitle={"Líderes de bateo"} limit={10} />
          <PlayerStats players={pitchingLeaders} sectionTitle={"Líderes de pitcheo"} limit={10} />
        </Stack>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Stack spacing={2}>
          <LatestNews
            newsItems={news}
            sectionTitle={"Últimas Noticias"}
          />
          <Standings
            title="Liga Unica"
            leagueTables={[
              {
                teams: standings
              },
            ]}
            component="div"
          />
          <LatestNews
            newsItems={news}
            sectionTitle={"Destacados"}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Home;
