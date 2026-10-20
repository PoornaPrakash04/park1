# ParkX Smart Mobility Frontend

A responsive React + Vite shell for the ParkX Stitch design export. The eight original Stitch HTML screens are preserved under `public/stitch-pages/` and displayed inside a unified navigation workspace.

## Run locally

1. Install Node.js (18+ recommended).
2. In this directory, run `npm install`.
3. Run `npm run dev` and open the local URL shown by Vite.
4. For a production build, run `npm run build`.

## Included screens

- Overview dashboard
- Explore map / transit overlay
- Parking availability management
- Parking availability prediction
- Explainable parking recommendations
- Public transit connectivity
- Operational and model performance analytics
- System administration / sensor and gateway health

## Integration status

This is the **frontend prototype**. The embedded screens are the supplied Stitch HTML exports. The React navigation shell is functional, but live API, database, authentication, real-time sensor data, and model inference are not connected yet. Connect the UI to the FastAPI backend when its endpoints are ready. The map view may use the map implementation included in its Stitch HTML; production GIS should use Leaflet with OpenStreetMap tiles and suitable attribution.
