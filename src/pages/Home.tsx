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
import {
  useLatestNews,
  useUpcomingMatches,
  usePlayerStats,
  useStandings,
  useGameResults,
  useHightlights,
} from "../hooks";

const Home: React.FC = () => {
  const { topStory, latestNews } = useLatestNews();
  const highlights = useHightlights();
  const matches = useUpcomingMatches();
  const { battingLeaders, pitchingLeaders } = usePlayerStats();
  const standings = useStandings();
  const gameResults = useGameResults();
  const newsLimit = 5;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={8}>
        <Stack spacing={2}>
          <div>
            {topStory && (
              <TopStory
                imageUrl={topStory.imgSrc}
                headline={topStory.title}
                description={topStory.text}
                link={topStory.href}
              />
            )}
          </div>
          {gameResults.length > 0 && (
            <GamesList
              games={gameResults}
              sectionTitle={"Ultimos Resultados"}
              component="div"
            />
          )}
          {matches.length > 0 && (
            <GamesList
              games={matches}
              sectionTitle={"Próximos Partidos"}
              component="div"
            />
          )}
          {battingLeaders.length > 0 && (
            <PlayerStats
              players={battingLeaders}
              sectionTitle={"Líderes de bateo"}
              limit={newsLimit}
            />
          )}
          {pitchingLeaders.length > 0 && (
            <PlayerStats
              players={pitchingLeaders}
              sectionTitle={"Líderes de pitcheo"}
              limit={newsLimit}
            />
          )}
        </Stack>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Stack spacing={2}>
          {latestNews.length > 0 && (
            <LatestNews
              newsItems={latestNews}
              sectionTitle={"Últimas Noticias"}
            />
          )}
          <Standings
            title="Liga Unica"
            leagueTables={[
              {
                teams: standings,
              },
            ]}
            component="div"
          />
          {highlights.length > 0 && (
            <LatestNews newsItems={highlights} sectionTitle={"Destacados"} />
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Home;
