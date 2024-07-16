import React, { useState } from 'react';
import Tab from '../components/Tab';
import PropertyList from '../components/PropertyList';
import data from '../data/properties.json';
import '../pages/style.css';

const HomePage = () => {
  const [activeCity, setActiveCity] = useState('New York');
  const [visibleProperties, setVisibleProperties] = useState(4);


  const handleTabClick = (city) => {
    setActiveCity(city);
    setVisibleProperties(3); // Reset visible properties when switching cities
  };

  const loadMoreProperties = () => {
    console.log('Load more properties clicked');
    setVisibleProperties((prevCount) => prevCount + 3);
  };

//   console.log('Total properties in active city:', data[activeCity]?.length);

  return (
    <div className="home-page">
        <div className="tabs">
            {Object.keys(data).slice(0, 4).map((city) => (
                <Tab
                  key={city}
                  city={city}
                  isActive={city === activeCity}
                  onClick={handleTabClick}
                />
            ))}
        </div>   
        <PropertyList properties={data[activeCity].slice(0, visibleProperties)} />
        {visibleProperties < data[activeCity].length && (
            <button className='showmore'  onClick={loadMoreProperties}><i class="ri-hourglass-fill"></i>Show More</button>
        )}
    </div>
  );
};

export default HomePage;
