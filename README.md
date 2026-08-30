# Texas County Map Studio

An interactive web application for creating and customizing Texas county maps with individual county painting, linked county pages, and district creation capabilities.

## Features

✨ **Interactive County Painting** - Click any county to customize its appearance
🎨 **Customizable Styling** - Change base colors, apply flat or embossed effects
🏘️ **District/Region Creation** - Group counties into districts or custom regions
🔗 **Linked County Pages** - Connect each county to individual detail pages
💾 **Data Export** - Save your map configurations and county customizations
📱 **Responsive Design** - Works on desktop, tablet, and mobile devices

## Tech Stack

- **Frontend Framework**: React 18
- **Visualization**: D3.js
- **Build Tool**: Vite
- **Styling**: CSS3
- **Data Format**: GeoJSON

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository
```bash
git clone https://github.com/indigoenterpriseslimited-jpg/texas-county-map-studio.git
cd texas-county-map-studio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The app will open at `http://localhost:3000`

## Usage

### Basic Workflow

1. **Select a County** - Click on any county in the map to select it
2. **Customize** - The right panel shows county details:
   - Change the county color
   - Add a custom display name
   - Link to a dedicated county page
   - Add notes and metadata
3. **Change Base Style** - Use the left control panel to:
   - Change the base color for all unselected counties
   - Switch between flat and embossed map styles
4. **Create Districts** - Enable District Mode to group counties into regions
5. **Export** - Save your map configuration as JSON

### Key Controls

| Control | Function |
|---------|----------|
| Click County | Select/view county details |
| Color Picker | Change individual county or base color |
| Map Style | Toggle between flat and embossed effects |
| District Mode | Enable district creation mode |
| Export Map Data | Download current configuration |
| Clear All | Reset all customizations |

## Project Structure

```
texas-county-map-studio/
├── src/
│   ├── components/
│   │   ├── MapEditor.jsx          # Main map visualization
│   │   ├── ControlPanel.jsx       # Left sidebar controls
│   │   └── CountyDetailsPanel.jsx # Right sidebar details
│   ├── data/
│   │   └── texas-counties.json    # Texas county GeoJSON
│   ├── styles/
│   │   ├── main.css               # Global styles
│   │   ├── app.css                # App layout
│   │   ├── map-editor.css         # Map styles
│   │   ├── control-panel.css      # Control panel styles
│   │   └── county-details.css     # Details panel styles
│   ├── App.jsx                    # Main app component
│   └── main.jsx                   # React entry point
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## Preview Production Build

```bash
npm run preview
```

## Future Enhancements

### Planned Features
- [ ] Complete GeoJSON data for all 254 Texas counties
- [ ] Database integration for persistent county data storage
- [ ] User authentication and project management
- [ ] Advanced styling options (gradients, patterns)
- [ ] County comparison tools
- [ ] Heat map visualization
- [ ] Import/export to multiple formats (SVG, PNG, GeoJSON)
- [ ] Collaboration features
- [ ] Mobile app version
- [ ] API for external integrations

### Enhancement Ideas
- Add county statistics and demographics
- Create templates for common use cases
- Implement undo/redo functionality
- Add animation effects
- Support for custom regions beyond standard counties
- Integration with mapping services
- Real-time collaboration

## Data Format

### County Object
Each county in the application has the following structure:

```javascript
{
  color: "#e8e8e8",           // Hex color value
  customName: "String",       // Display name override
  linkedPage: "URL",          // Link to county detail page
  districtId: "String",       // District assignment
  notes: "String"             // Custom notes
}
```

### Export Format
Exported map data includes:

```json
{
  "baseColor": "#e8e8e8",
  "mapStyle": "flat|embossed",
  "counties": {
    "CountyName": { /* county object */ }
  },
  "timestamp": "ISO-8601 date"
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines
1. Keep components focused and single-purpose
2. Use meaningful variable and function names
3. Add comments for complex logic
4. Test responsive design
5. Update README for significant changes

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check existing issues for similar topics
- Provide detailed descriptions and steps to reproduce

## Acknowledgments

- GeoJSON data sourced from public geographic datasets
- D3.js for powerful visualization capabilities
- React for the component framework
- Vite for fast development experience

---

**Made with ❤️ for Texas cartography enthusiasts**
