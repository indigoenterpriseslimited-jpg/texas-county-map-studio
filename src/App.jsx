import React, { useState, useEffect } from 'react';
import MapEditor from './components/MapEditor';
import ControlPanel from './components/ControlPanel';
import CountyDetailsPanel from './components/CountyDetailsPanel';
import './styles/app.css';

function App() {
  const [counties, setCounties] = useState({});
  const [selectedCounty, setSelectedCounty] = useState(null);
  const [districtMode, setDistrictMode] = useState(false);
  const [districts, setDistricts] = useState({});
  const [baseColor, setBaseColor] = useState('#e8e8e8');
  const [mapStyle, setMapStyle] = useState('flat'); // flat, embossed

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Texas County Map Studio</h1>
        <p>Interactive map editor with county customization</p>
      </header>

      <div className="main-content">
        <aside className="control-panel-sidebar">
          <ControlPanel
            baseColor={baseColor}
            onBaseColorChange={setBaseColor}
            mapStyle={mapStyle}
            onMapStyleChange={setMapStyle}
            districtMode={districtMode}
            onDistrictModeChange={setDistrictMode}
            counties={counties}
            onCountiesChange={setCounties}
          />
        </aside>

        <main className="map-container">
          <MapEditor
            counties={counties}
            selectedCounty={selectedCounty}
            onCountySelect={setSelectedCounty}
            onCountyColorChange={(countyName, color) => {
              setCounties(prev => ({
                ...prev,
                [countyName]: { ...prev[countyName], color }
              }));
            }}
            baseColor={baseColor}
            mapStyle={mapStyle}
            districtMode={districtMode}
            districts={districts}
            onDistrictAssign={(countyName, districtId) => {
              setCounties(prev => ({
                ...prev,
                [countyName]: { ...prev[countyName], districtId }
              }));
            }}
          />
        </main>

        {selectedCounty && (
          <aside className="details-panel-sidebar">
            <CountyDetailsPanel
              county={selectedCounty}
              countyData={counties[selectedCounty]}
              onClose={() => setSelectedCounty(null)}
              onColorChange={(color) => {
                setCounties(prev => ({
                  ...prev,
                  [selectedCounty]: { ...prev[selectedCounty], color }
                }));
              }}
            />
          </aside>
        )}
      </div>
    </div>
  );
}

export default App;
