import latestNews from '../data/json/news/latestNews.json'

export const useLatestNews = () => {
    return {
        topStory: latestNews.slice(0, 1)[0],
        latestNews: latestNews.slice(1, 4),
    };
};