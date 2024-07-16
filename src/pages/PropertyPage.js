import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/properties.json';
import '../pages/style.css';

const PropertyPage = ({ data }) => {
    // Get the property ID from the URL params
    const { id } = useParams();
    
    // Check if the data object is defined and contains the desired city
    if (!data || !data['New York']) {
        return <div className="property-page">City not found</div>;
    }
    const city = data['New York']; 
  
  
    // Find the property with the matching ID
    const property = city.find((property) => property.id === parseInt(id));
  
    if (!property) {
      return <div className='property-page'>Property not found</div>;
    }
  
    return (
      <div className="property-page">
          <div className="property-image">
              <img src={property.imageUrl} alt={property.name} />
          </div>
          <div className="property-details">
              <h2>{property.name}</h2>
              <p>{property.description}</p>
              <div className="property-features">
                  <span>Price: ${property.price}</span>
                  <span>Rating: {property.rating}</span>
              </div>
          </div>
      </div>
    );
};

export default PropertyPage;
