import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src="https://via.placeholder.com/400x250" alt="Property" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{property.name || 'Luxury Villa'}</h3>
        <p className="text-sm text-gray-600 mb-2">Status: {property.status || 'For Sale'}</p>
        <p className="text-gray-700 text-sm mb-4">{property.description || 'A fully fitted luxury home with en-suite rooms, a pool, and modern amenities. It is conveniently located near shopping and the airport.'}</p>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
          <div>
            <strong>Bedrooms:</strong> {property.bedrooms || '4'}
          </div>
          <div>
            <strong>Bathrooms:</strong> {property.bathrooms || '5'}
          </div>
          <div>
            <strong>Garages:</strong> {property.garages || '4'}
          </div>
          <div>
            <strong>SQ FT:</strong> {property.sqft || 'N/A'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;