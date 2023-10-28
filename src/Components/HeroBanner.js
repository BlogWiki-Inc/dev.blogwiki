// HeroBanner.js
import React, { useState, useEffect } from 'react';
import '../CSS/HeroBanner.css';
import image1 from '../ImageRepoSRC/Women2.jpeg';
import image2 from '../ImageRepoSRC/Women17.jpeg';
const HeroBanner = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentNews, setCurrentNews] = useState(0);

  useEffect(() => {
    // Fetch your news data from an API or a local source
    // Replace this with your actual data source
    // For this example, we'll use dummy data
    const dummyNewsData = [
      {
        title: 'Breaking News 1',
        description: 'This is a breaking news story. Read more to find out.',
        image: image1,
      },
      {
        title: 'Top Story 2',
        description: 'Explore the top news story of the day.',
        image: image2,
      },
      // Add more news articles here
    ];

    setNewsData(dummyNewsData);
  }, []);

  useEffect(() => {
    // Automatically switch to the next news article every 5 seconds
    const timer = setInterval(() => {
      setCurrentNews((prevNews) => (prevNews + 1) % newsData.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [newsData]);

  return (
    <div className="hero-banner">
      {newsData.length > 0 && (
        <div className="hero-content">
          <img className="ImageStyle" src={newsData[currentNews].image} alt="News" />
          <div className="news-details">
            <h1>{newsData[currentNews].title}</h1>
            <p>{newsData[currentNews].description}</p>
            <a href="/BlogPage" className="read-more">
              Read More
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroBanner;
