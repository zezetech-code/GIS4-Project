import React, { useState } from 'react';

function AddPlot() {
  // State za kuhifadhi taarifa za fomu
  const [plotData, setPlotData] = useState({
    jinaMmiliki: '',
    nambaNida: '',
    nambaKiwanja: '',
    kitalu: '',
    matumizi: 'Makazi',
    wilayaKata: '',
    failiGis: null
  });

  // Kushughulikia mabadiliko ya maandishi kwenye fomu
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlotData({ ...plotData, [name]: value });
  };

  // Kushughulikia upakiaji wa faili la ramani (GeoJSON/KML)
  const handleFileChange = (e) => {
    setPlotData({ ...plotData, failiGis: e.target.files[0] });
  };

  // Kitendo cha kubofya "Hifadhi"
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data inayotumwa kwenda Backend:", plotData);
    alert("Kiwanja kimesajiliwa kwa mafanikio kwenye mfumo wa mkoa!");
    
    // Kumbuka: Hapa baadaye tutaweka ile "fetch" au "axios" 
    // ili kutuma hizi data moja kwa moja kwenye database kupitia Backend yetu.
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
          Usajili wa Kiwanja Mpya (Mkoa)
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* SEHEMU YA MMILIKI */}
          <div>
            <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              1. Taarifa za Mmiliki
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Jina Kamili</label>
                <input 
                  type="text" name="jinaMmiliki" required
                  value={plotData.jinaMmiliki} onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Mfano: Juma Hamisi"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Namba ya NIDA</label>
                <input 
                  type="text" name="nambaNida" required
                  value={plotData.nambaNida} onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Namba ya Kitambulisho cha Taifa"
                />
              </div>
            </div>
          </div>

          {/* SEHEMU YA KIWANJA */}
          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              2. Maelezo ya Eneo & Kiwanja
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Namba ya Kiwanja (Plot No.)</label>
                <input 
                  type="text" name="nambaKiwanja" required
                  value={plotData.nambaKiwanja} onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Mfano: 45"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Kitalu (Block)</label>
                <input 
                  type="text" name="kitalu" required
                  value={plotData.kitalu} onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Mfano: H"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Matumizi ya Ardhi</label>
                <select 
                  name="matumizi" value={plotData.matumizi} onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="Makazi">Makazi</option>
                  <option value="Biashara">Biashara</option>
                  <option value="Viwanda">Viwanda</option>
                  <option value="Kilimo">Kilimo</option>
                </select>
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Wilaya & Kata kilipo</label>
              <input 
                type="text" name="wilayaKata" required
                value={plotData.wilayaKata} onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Mfano: Morogoro Mjini / Kihonda"
              />
            </div>
          </div>

          {/* SEHEMU YA GIS DATA */}
          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
              3. Data za Ramani (GIS Boundaries)
            </h3>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Pakia faili la Mipaka (.geojson, .kml, au .shapefile)
              </label>
              <input 
                type="file" accept=".geojson,.kml,.json" onChange={handleFileChange} required
                className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              <p className="text-xs text-gray-400 mt-1">Faili hili linatakiwa kubeba coordinates sahihi za polygons za kiwanja.</p>
            </div>
          </div>

          {/* VITUFA VYA CHINI */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button 
              type="button" 
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            >
              Futa Zote
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow-sm"
            >
              Hifadhi Kwenye Mfumo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPlot;
