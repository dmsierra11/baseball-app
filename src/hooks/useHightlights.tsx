import { useState, useEffect } from 'react';
import type { NewsItemType } from 'fantasy-baseball-ui'
import { BASE_URL } from '../config/api';

export const useHightlights = () => {
    const [news, setNews] = useState<NewsItemType[]>([]);

    useEffect(() => {
        fetch(`${BASE_URL}/news?type=highlights`)
            .then((response) => response.json())
            .then((data) => setNews(data as unknown as NewsItemType[]));
    }, []);

    return news;
};