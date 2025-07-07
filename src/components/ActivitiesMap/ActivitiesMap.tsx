import { useContext, useEffect } from 'react';
import clsx from 'clsx';

import { Map, AdvancedMarker, useMap } from '@vis.gl/react-google-maps';
import TripContext, { TripContextType } from '@/contexts/TripContext';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Coordinates } from '@/types/trip';
import zoomLevels from '@/constants/map';
import styles from './ActivitiesMap.module.css';

interface Props {
  defaultCenter: Coordinates;
}

export default function ActivitiesMap({ defaultCenter }: Props) {
  const { activities, selectedActivity, setHoveredActivity } =
    useContext<TripContextType>(TripContext);
  const map = useMap();

  useEffect(() => {
    if (selectedActivity && map) {
      const latLng = selectedActivity.coords;
      map.panTo({ lat: latLng.lat, lng: latLng.lng });
    }
  }, [selectedActivity, map]);

  return (
    <div className={styles.map}>
      <Map
        mapId="activities-map"
        defaultCenter={defaultCenter}
        defaultZoom={zoomLevels.DEFAULT}
        minZoom={zoomLevels.MIN}
        maxZoom={zoomLevels.MAX}
        zoomControl
        gestureHandling="greedy"
      >
        {activities.map((activity) => (
          <div key={activity.id}>
            <AdvancedMarker
              key={activity.id}
              onMouseEnter={() => setHoveredActivity(activity)}
              onMouseLeave={() => setHoveredActivity(null)}
              position={{
                lat: activity.coords.lat,
                lng: activity.coords.lng,
              }}
            >
              <OverlayTrigger
                placement="auto"
                overlay={<Tooltip id={`tooltip-${activity.id}`}>{activity.name}</Tooltip>}
              >
                <img
                  className={clsx(
                    styles.marker,
                    selectedActivity?.id === activity.id && styles.highlighted,
                  )}
                  src="./marker.png"
                  alt="marker"
                  height="50px"
                  width="50px"
                />
              </OverlayTrigger>
            </AdvancedMarker>
          </div>
        ))}
      </Map>
    </div>
  );
}
