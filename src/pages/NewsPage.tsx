import { Container, Stack, TopStory } from "fantasy-baseball-ui";
import { useLatestNews } from "../hooks";

const NewsPage: React.FC = () => {
  const { latestNews } = useLatestNews();

  return (
    <Container maxWidth="md">
      <Stack spacing={2}>
        {latestNews.length > 0 &&
          latestNews.map((news) => (
            <TopStory
              imageUrl={news.imgSrc}
              headline={news.title}
              description={news.text}
              link={news.href}
            />
          ))}
      </Stack>
    </Container>
  );
};

export default NewsPage;
