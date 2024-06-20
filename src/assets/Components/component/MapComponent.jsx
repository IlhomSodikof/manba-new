// MapComponent.js
import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../../../node_modules/leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'; // Geocoder pluqini CSS faylini import qilish
import 'leaflet-control-geocoder/dist/Control.Geocoder';
// import 'leaflet.css';

import L from 'leaflet';
// import { markersData } from './Markers';

// Default marker icon pathini to'g'irlash
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapComponent = () => {
  const mapRef = useRef("england");

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current.leafletElement;
      const geocoder = L.Control.geocoder({
        defaultMarkGeocode: false,
      }).addTo(map);
    }
  }, []);
  const markersData = [
    { id: 1, position: [40.7128, -74.0060], popupText: 'obidalarmu' },
    { id: 2, position: [39.652451, 66.970139], popupText: 'Toshkentdagi aha oho' },
    { id: 3, position: [41.8781, -87.6298], popupText: 'Chicago, IL' },
    //   [41.311081, 69.240562], popupText: 'obidalarmu' },
    // { id: 2, position: [39.652451, 66.970139]
    // Yana boshqa markerlar qo'shing
  ];
  return (
    <>
      <MapContainer center={[41.311081, 69.240562]} zoom={4} className="leaflet-container h-[40vh] w-[800px]" ref={mapRef}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markersData.map(marker => (
          <Marker key={marker.id} position={marker.position}>
            <Popup>
              <b>{marker.popupText}</b>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>

  );
};

export default MapComponent;
