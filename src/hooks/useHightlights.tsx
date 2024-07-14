import { useState, useEffect } from 'react';
import type { NewsItemType } from 'fantasy-baseball-ui'
import latestNews from '../data/json/news/highlights.json'

export const useHightlights = () => {
    const [news, setNews] = useState<NewsItemType[]>([]);

    useEffect(() => {
        setNews(latestNews as unknown as NewsItemType[]);
    }, []);

    return news;
};