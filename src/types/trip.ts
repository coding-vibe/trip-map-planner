export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Activity {
  id: number;
  name: string;
  description: string;
  photo_url: string;
  coords: Coordinates;
}

export interface TripDay {
  id: number;
  title: string;
  activities: Activity[];
}

export interface Trip {
  trip_title: string;
  days: TripDay[];
}
