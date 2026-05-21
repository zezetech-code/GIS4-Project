import React from 'react';
import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Mfano wa data za kiwanja (Hizi baadaye zitakuja kutoka kwenye Backend/Database)
const mfanoWaKiwanja = [
  [-6.82, 37.66], // Point 1 (Latitude, Longitude)
  [-6.82, 37.67], // Point 2
  [-6.83, 37.67], // Point 3
  [-6.83, 37.66]  // Point 4
];

function MapView() {
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar ya Kushoto ya Kutafuta Viwanja */}
      <div className="w-1/4 bg-gray-800 text-white p-4 z-[1000]">
        <h2 className="text-xl font-bold mb-4">Mfumo wa Ardhi (Mkoa)</h2>
        <input 
          type="text" 
          placeholder="Tafuta Namba ya Kiwanja..." 
          className="w-full p-2 rounded text-black mb-4 focus:outline-none"
        />
        <div className="bg-gray-700 p-3 rounded">
          <p className="text-sm font-semibold">Taarifa za Eneo:</p>
          <p className="text-xs text-gray-300 mt-1">Chagua kiwanja kwenye ramani kuona undani wake.</p>
        </div>
      </div>

      {/* Sehemu Kuu ya Ramani */}
      <div className="w-3/4 h-full">
        <MapContainer center={[-6.82, 37.66]} zoom={14} className="h-full w-full">
          {/* Ramani ya Msingi (OpenStreetMap) */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {/* Kuchora Kiwanja Kwenye Ramani */}
          <Polygon positions={mfanoWaKiwanja} pathOptions={{ color: 'blue', fillColor: 'cyan' }}>
            <Popup>
              <div className="p-1">
                <h3 className="font-bold text-sm">Plot No: 45 / Block H</h3>
                <p className="text-xs">Mmiliki: Juma Hamisi</p>
                <p className="text-xs text-red-500 font-semibold">Hali ya Kodi: Inadaiwa</p>
              </div>
            </Popup>
          </Polygon>
        </MapContainer>
      </div>
    </div>
  );
}

export default MapView;
