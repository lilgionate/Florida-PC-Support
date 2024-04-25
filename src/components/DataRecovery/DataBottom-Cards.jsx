import React from 'react';


const Feature = ({ icon, title, description, buttonText }) => {
  return (
    <div className="data-hero-bottom-container">
    <div className="flexItemsCenter spaceX3 mb-4">
      <div className="p2Blue">
        {icon}
      </div>
      <h2 className="text-xl font-bold textZinc800">{title}</h2>
    </div>
    <p className="textZinc600 mb-6">{description}</p>
    <button className="bg-blue-500 textWhite px4 py2 rounded-lg">
      {buttonText}
    </button>
  </div>
  );
};

export default Feature;