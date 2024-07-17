import { useState, useEffect } from 'react';
import { BASE_URL } from '../config/api';
import type { NewsItemType } from 'fantasy-baseball-ui';

export const useLatestNews = () => {
    const [latestNews, setLatestNews] = useState<NewsItemType[]>([]);

    useEffect(() => {
        fetch(`${BASE_URL}/news?type=latest`)
            .then((response) => response.json())
            .then((data) => setLatestNews(data as unknown as NewsItemType[]));
    }, []);
    return {
        topStory: latestNews.slice(0, 1)[0],
        latestNews: latestNews.slice(1, 4),
    };
};