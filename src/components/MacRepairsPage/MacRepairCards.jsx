import React from 'react';
import './MacRepairs.scss';

const MacServiceCard = ({ imageUrl, altText, title, priceRange }) => {
    return (
        <div className="mac-services-price-cards">
            <img src={imageUrl} alt={altText} className="mac-services-price-img" />
            <div className="mt-4">
                <h3 className="mac-services-price-title">{title}</h3>
                <p className="mac-services-price">Price Range: {priceRange}</p>
            </div>
        </div>
    );
};

export default MacServiceCard;