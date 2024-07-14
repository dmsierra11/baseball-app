import { useState, useEffect } from 'react';
import type { NewsItemType } from 'fantasy-baseball-ui'
import latestNews from '../data/json/latestNews.json'

export const useLatestNews = () => {
    const [news, setNews] = useState<NewsItemType[]>([]);

    useEffect(() => {
        setNews(latestNews as unknown as NewsItemType[]);
    }, []);

    return news;
};