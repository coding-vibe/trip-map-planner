import { createContext } from 'react';
import { Activity, Trip } from '@/types/trip';

const initialValue = {
  trip: null,
  selectedDayId: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  selectDayId: (_: number) => {},
  activities: [],
  selectedActivity: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setSelectedActivity: (_: Activity | null) => {},
  hoveredActivity: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setHoveredActivity: (_: Activity | null) => {},
};

export interface TripContextType {
  trip: Trip | null;
  selectedDayId: number | null;
  selectDayId: (dayId: number) => void;
  activities: Activity[];
  selectedActivity: Activity | null;
  setSelectedActivity: (activity: Activity | null) => void;
  hoveredActivity: Activity | null;
  setHoveredActivity: (_: Activity | null) => void;
}

const TripContext = createContext<TripContextType>(initialValue);

export default TripContext;
