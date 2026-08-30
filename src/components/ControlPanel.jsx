import React, { useState } from 'react';
import '../styles/control-panel.css';

function ControlPanel({
  baseColor,
  onBaseColorChange,
  mapStyle,
  onMapStyleChange,
  districtMode,
  onDistrictModeChange,
  counties,
  onCountiesChange
}) {
  const [exportData, setExportData] = useState(null);

  const handleExport = () => {
    const data = {
      baseColor,
      mapStyle,
      counties,
      timestamp: new Date().toISOString()
    };
    setExportData(JSON.stringify(data, null, 2));
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all county customizations?')) {
      onCountiesChange({});
    }
  };

  return (
    <div className="control-panel">
      <h2>Controls</h2>

      <section className="control-section">
        <h3>Styling</h3>
        
        <div className="control-group">
          <label htmlFor="baseColor">Base Color:</label>
          <input
            id="baseColor"
            type="color"
            value={baseColor}
            onChange={(e) => onBaseColorChange(e.target.value)}
            className="color-picker"
          />
        </div>

        <div className="control-group">
          <label htmlFor="mapStyle">Map Style:</label>
          <select
            id="mapStyle"
            value={mapStyle}
            onChange={(e) => onMapStyleChange(e.target.value)}
            className="style-select"
          >
            <option value="flat">Flat</option>
            <option value="embossed">Embossed</option>
          </select>
        </div>
      </section>

      <section className="control-section">
        <h3>Modes</h3>
        
        <div className="control-group">
          <label htmlFor="districtMode">
            <input
              id="districtMode"
              type="checkbox"
              checked={districtMode}
              onChange={(e) => onDistrictModeChange(e.target.checked)}
            />
            District Mode
          </label>
          <p className="help-text">Group counties into districts</p>
        </div>
      </section>

      <section className="control-section">
        <h3>Data</h3>
        
        <button onClick={handleExport} className="btn btn-primary">
          Export Map Data
        </button>
        
        <button onClick={handleClearAll} className="btn btn-danger">
          Clear All
        </button>

        {exportData && (
          <div className="export-preview">
            <p className="small-text">Exported Data:</p>
            <pre>{exportData.substring(0, 200)}...</pre>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(exportData);
                alert('Copied to clipboard!');
              }}
              className="btn btn-small"
            >
              Copy to Clipboard
            </button>
          </div>
        )}
      </section>

      <section className="control-section">
        <h3>Stats</h3>
        <p>Total Counties Customized: <strong>{Object.keys(counties).length}</strong></p>
      </section>
    </div>
  );
}

export default ControlPanel;
