# 🗺️ Trip Map Planner

**Trip Map Planner** is a web app that displays a travel itinerary using a sidebar and an interactive map. It loads mock trip data asynchronously and visualizes daily activities with markers.

👉 [**Live Demo**](https://coding-vibe.github.io/trip-map-planner)

---

## ✨ Features

- Async loading of trip data from JSON
- Sidebar with day-by-day itinerary
- Interactive map with markers for each activity
- Highlight markers on hover or click
- Responsive layout with mobile support
- Smooth integration with Google Maps API

---

## 🧱 Tech Stack

- React + Vite
- TypeScript
- Bootstrap 5
- CSS Modules
- [@vis.gl/react-google-maps](https://visgl.github.io/react-google-maps)

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Run production
npm start
```

> To use the Google Maps API, create a `.env` file with `VITE_GOOGLE_MAPS_API_URL`
> in the project root (look at env-template)
