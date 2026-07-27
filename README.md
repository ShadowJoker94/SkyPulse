# SkyPulse Offline

SkyPulse Offline is a self-contained weather-dashboard demo for Greece. It works by opening `index.html` directly and does not make any API or internet requests.

## What changed

- Search is fully offline and uses a bundled list of Greek cities, islands, and Athens-area municipalities.
- Search accepts English names, Greek names, and common aliases/transliterations.
- Press **Enter** to select the first matching area.
- Use **Up/Down Arrow** keys to move through results.
- The **Nearest area** button uses browser geolocation only to choose the closest bundled location; it does not download weather.
- Forecast values are deterministically generated in the browser from location, season, and date.
- The last selected area and °C/°F preference are stored in `localStorage`.

## Important limitation

The displayed conditions are **offline sample data**, not live meteorological observations. A computer with no internet connection cannot retrieve current weather. For real weather, the online API version or an earlier cached API response is required.

## Run

Double-click `index.html`. No server, installation, API key, or build step is required.

## Project structure

```text
skypulse/
├── index.html
├── styles.css
├── app.js
└── README.md
```
