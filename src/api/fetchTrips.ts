import { Trip } from '@/types/trip';
import mockData from './mock-trips.json';

// Simulated delay for fetching data
const DELAY = 1000;

const fetchTrips = (): Promise<Trip> =>
  new Promise((resolve) => setTimeout(() => resolve(mockData), DELAY));

export default fetchTrips;
