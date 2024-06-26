// src/MapComponent.jsx

import React, { useState } from 'react';

const MapComponent = ({ lat, long }) => {
  const [showPopup, setShowPopup] = useState(false);

  const mapUrl = `https://maps.google.com/maps?q=${lat},${long}&z=16&output=embed`;

  return (

    <div>
      <div className="w-full h-[80vh] relative">
        <iframe
          src={mapUrl}
          className="w-full  h-full"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
        <button
          onClick={() => setShowPopup(true)}
          className="absolute top-28  right-4 bg-[red] text-[white] py-2 px-4 rounded"
        >
          Show Popup
        </button>
        {showPopup && (
          <div className="absolute top-0  left-0 w-full h-full flex items-center justify-center ">
            <div className=" p-8 rounded bg-[white] shadow-lg">
              <h2 className="text-2xl mb-4">Joylashuv nuqtasi</h2>
              <p>Bu shu shu bu bu shu Bu shu shu bu bu shu</p>
              <button
                onClick={() => setShowPopup(false)}
                className="mt-4 bg-[red] text-[white] py-2 px-4 rounded"
              >
                yopish
              </button>
            </div>
          </div >
        )}
      </div>

    </div >
  );
};

export default MapComponent;