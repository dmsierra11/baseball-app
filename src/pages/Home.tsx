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
import { useLatestNews, useUpcomingMatches, usePlayerStats, useStandings, useResponsive } from "../hooks";

const Home: React.FC = () => {
  const news = useLatestNews();
  const matches = useUpcomingMatches();
  const { battingLeaders, pitchingLeaders } = usePlayerStats();
  const standings = useStandings();
  const { isXs, isSm, isMd, isLg, isXl } = useResponsive();
  console.log(isXs, isSm, isMd, isLg, isXl);

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
          <GamesList games={matches} sectionTitle={"Ultimos Resultados"} />
          <GamesList games={matches} sectionTitle={"Próximos Partidos"} />
          <Standings
            title="Liga Unica"
            leagueTables={[
              {
                division: "AL East",
                teams: standings
              },
              {
                division: "AL West",
                teams: standings
              }
            ]}
            stackDirection={`${isXs ? "column" : "row"}`}
          />
        </Stack>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Stack spacing={2}>
          <LatestNews
            newsItems={news}
            sectionTitle={"Últimas Noticias"}
          />
          <PlayerStats players={battingLeaders} sectionTitle={"Líderes de bateo"} />
          <LatestNews
            newsItems={news}
            sectionTitle={"Destacados"}
          />
          <PlayerStats players={pitchingLeaders} sectionTitle={"Líderes de pitcheo"} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Home;
