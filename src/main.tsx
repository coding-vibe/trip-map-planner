import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { APIProvider } from "@vis.gl/react-google-maps";

import ROME_COORDINATES from "@/constants/romeCoordinates";
import TripProvider from "@/components/TripProvider";
import Layout from "@/components/Layout";
import ActivitiesMap from "@/components/ActivitiesMap";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TripProvider>
      <APIProvider
        apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_URL}
        language="uk"
        region="IT"
      >
        <Layout>
          <ActivitiesMap defaultCenter={ROME_COORDINATES} />
        </Layout>
      </APIProvider>
    </TripProvider>
  </StrictMode>
);
