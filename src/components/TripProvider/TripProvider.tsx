import { ReactNode, useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

import fetchTrips from '@/api/fetchTrips';
import Spinner from '@/components/Spinner';
import TripContext from '@/contexts/TripContext';
import { Activity, Trip } from '@/types/trip';
import FetchStatus from '@/types/fetchStatus';

interface Props {
  children: ReactNode;
}

export default function TripProvider({ children }: Props) {
  const [trip, setTrip] = useState<Trip | null>(null);
  const [status, setStatus] = useState<null | FetchStatus>();
  const [hoveredActivity, setHoveredActivity] = useState<null | Activity>(null);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  const [selectedDayId, selectDayId] = useState<number | null>(null);

  useEffect(() => {
    setStatus(FetchStatus.LOADING);
    fetchTrips()
      .then((data) => {
        setTrip(data);

        if (data.days.length) {
          selectDayId(data.days[0].id);
        }

        setStatus(FetchStatus.SUCCESS);
      })
      .catch(() => setStatus(FetchStatus.ERROR));
  }, []);

  const getFilteredActivitiesByDay = (): Activity[] => {
    if (!selectedDayId) {
      return trip?.days.reduce<Activity[]>((acc, day) => [...acc, ...day.activities], []) ?? [];
    }

    const day = trip?.days.find((day) => day.id === selectedDayId);

    return day?.activities ?? [];
  };

  const contextValue = {
    trip,
    selectedDayId,
    selectDayId,
    activities: getFilteredActivitiesByDay(),
    selectedActivity,
    setSelectedActivity,
    hoveredActivity,
    setHoveredActivity,
  };

  return (
    <TripContext.Provider value={contextValue}>
      {status === FetchStatus.ERROR && <Alert variant="error">Error loading data</Alert>}
      {status === FetchStatus.LOADING && <Spinner />}
      {status === FetchStatus.SUCCESS && children}
    </TripContext.Provider>
  );
}
