import { Container, GameCard } from "fantasy-baseball-ui";

const ResultsPage = () => {
  return (
    <Container>
      <GameCard
        date="2024-05-01"
        home_team={{ name: "LAD", score: 5, record: "1-0" }}
        away_team={{ name: "SF", score: 3, record: "0-1" }}
        location="Campo 1"
      />
    </Container>
  );
};

export default ResultsPage;
