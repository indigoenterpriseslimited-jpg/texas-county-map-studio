import React, { useState } from 'react';
import '../styles/county-details.css';

function CountyDetailsPanel({
  county,
  countyData,
  onClose,
  onColorChange
}) {
  const [customName, setCustomName] = useState(countyData?.customName || '');
  const [notes, setNotes] = useState(countyData?.notes || '');
  const [linkedPage, setLinkedPage] = useState(countyData?.linkedPage || '');

  const handleColorChange = (color) => {
    onColorChange(color);
  };

  const handleSaveCustomName = () => {
    // This would need to be handled in parent
    console.log('Saving custom name:', customName);
  };

  return (
    <div className="county-details-panel">
      <div className="panel-header">
        <h2>{county}</h2>
        <button onClick={onClose} className="close-btn">&times;</button>
      </div>

      <div className="panel-content">
        <section className="detail-section">
          <h3>Appearance</h3>
          
          <div className="detail-group">
            <label htmlFor="countyColor">County Color:</label>
            <input
              id="countyColor"
              type="color"
              value={countyData?.color || '#e8e8e8'}
              onChange={(e) => handleColorChange(e.target.value)}
              className="color-picker"
            />
          </div>
        </section>

        <section className="detail-section">
          <h3>Information</h3>
          
          <div className="detail-group">
            <label htmlFor="customName">Display Name:</label>
            <input
              id="customName"
              type="text"
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              placeholder={county}
              className="text-input"
            />
          </div>

          <div className="detail-group">
            <label htmlFor="linkedPage">Linked Page URL:</label>
            <input
              id="linkedPage"
              type="text"
              value={linkedPage}
              onChange={(e) => setLinkedPage(e.target.value)}
              placeholder="https://example.com/county-page"
              className="text-input"
            />
            {linkedPage && (
              <a href={linkedPage} target="_blank" rel="noopener noreferrer" className="link-btn">
                Open Page
              </a>
            )}
          </div>

          <div className="detail-group">
            <label htmlFor="notes">Notes:</label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any notes about this county..."
              className="text-area"
              rows="4"
            />
          </div>
        </section>

        <button className="btn btn-primary btn-block">
          Save County Data
        </button>
      </div>
    </div>
  );
}

export default CountyDetailsPanel;
