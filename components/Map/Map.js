// components/Map/Map.js
import React from 'react';

export default function Map({ reports = [] }) {
  return (
    <div className="map-container">
      <h3>Leak Locations Map</h3>
      <div style={{ 
        height: '300px', 
        backgroundColor: '#f0f0f0', 
        border: '1px solid #ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <p>Map component - {reports.length} reports to display</p>
        {/* You can integrate Leaflet or Google Maps here later */}
      </div>
    </div>
  );
}