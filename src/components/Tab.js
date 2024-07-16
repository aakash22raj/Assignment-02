import React from 'react';
import '../pages/style.css';

const Tab = ({ city, isActive, onClick }) => {
  return (
    <div
      className={`tab ${isActive ? 'active' : ''}`}
      onClick={() => onClick(city)}
    >
      {city}
    </div>
  );
};

export default Tab;
