import React, { useEffect, useState } from 'react';
// import { getNews } from '../services/api';

const NewsPage: React.FC = () => {
    const [news, setNews] = useState([]);

    // useEffect(() => {
    //     getNews().then(response => {
    //         setNews(response.data);
    //     });
    // }, []);

    return (
        <div>
            <h1>Últimas Noticias</h1>
            <ul>
                {news.map((newsItem: any) => (
                    <li key={newsItem.id}>{newsItem.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default NewsPage;