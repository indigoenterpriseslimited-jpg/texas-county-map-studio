import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import texasCounties from '../data/texas-counties.json';
import '../styles/map-editor.css';

function MapEditor({
  counties,
  selectedCounty,
  onCountySelect,
  onCountyColorChange,
  baseColor,
  mapStyle,
  districtMode,
  districts,
  onDistrictAssign
}) {
  const svgRef = useRef();

  useEffect(() => {
    if (!svgRef.current || !texasCounties) return;

    const svg = d3.select(svgRef.current);
    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    // Clear previous content
    svg.selectAll('*').remove();

    // Create projection for Texas
    const projection = d3.geoMercator()
      .fitSize([width, height], texasCounties);

    const pathGenerator = d3.geoPath().projection(projection);

    // Add background
    svg.append('rect')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', '#f5f5f5');

    // Render counties
    svg.selectAll('path')
      .data(texasCounties.features)
      .enter()
      .append('path')
      .attr('d', pathGenerator)
      .attr('class', 'county')
      .attr('data-county', d => d.properties.name)
      .attr('fill', d => {
        const countyName = d.properties.name;
        if (counties[countyName]?.color) {
          return counties[countyName].color;
        }
        return baseColor;
      })
      .attr('stroke', '#333')
      .attr('stroke-width', 1)
      .style('filter', mapStyle === 'embossed' ? 'drop-shadow(2px 2px 1px rgba(0,0,0,0.3))' : 'none')
      .on('click', (event, d) => {
        event.stopPropagation();
        onCountySelect(d.properties.name);
      })
      .on('mouseover', function(event, d) {
        d3.select(this)
          .attr('stroke-width', 2)
          .style('cursor', 'pointer')
          .style('opacity', 0.9);
      })
      .on('mouseout', function() {
        d3.select(this)
          .attr('stroke-width', selectedCounty === this.getAttribute('data-county') ? 3 : 1)
          .style('opacity', 1);
      });

    // Highlight selected county
    if (selectedCounty) {
      svg.selectAll('.county')
        .filter(d => d.properties.name === selectedCounty)
        .attr('stroke-width', 3)
        .attr('stroke', '#ff6b6b');
    }

  }, [texasCounties, counties, selectedCounty, baseColor, mapStyle]);

  return (
    <div className="map-editor">
      <svg ref={svgRef} className="map-svg"></svg>
      <div className="map-info">
        {selectedCounty && (
          <p>Selected: <strong>{selectedCounty}</strong></p>
        )}
      </div>
    </div>
  );
}

export default MapEditor;
