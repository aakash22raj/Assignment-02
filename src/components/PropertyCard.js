import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/style.css';

const PropertyCard = ({ property }) => {
  return (
    <Link to={`/property/${property.id}`} className="property-card">
        <div className="property-image">
            <img src={property.imageUrl} alt={property.name}/>
        </div>
        <div className='location'>
            <i class="ri-map-pin-2-line"></i>
            <p>{property.location}</p>
        </div>
        <div className="property-details">
            <h3>{property.name}</h3>
            {/* <p>{property.description}</p> */}

            <div className='facility'>
                <div>
                    <i class="ri-building-line"></i>
                    <p>{property.room}</p>
                </div>
                <div>
                    <i class="ri-hotel-bed-line"></i>
                    <p>{property.bed}</p>
                </div>
                <div>
                    <i class="ri-layout-column-line"></i>
                    <p>{property.bath}</p>
                </div>
                <div>
                    <i class="ri-contract-left-right-line"></i>
                    <p>{property.rent}</p>
                </div>
            </div>
            <div className="property-features">
                <span className="property-price">${property.price}<p>/month</p></span>
                <span className="property-rating">Rating: {property.rating}</span>
            </div>
        </div>
        <button className='card-button'>Read More</button>
    </Link>
  );
};

export default PropertyCard;
