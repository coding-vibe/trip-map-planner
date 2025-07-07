import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import TripContext, { TripContextType } from '@/contexts/TripContext';
import ActivityCard from '@/components/ActivityCard';
import styles from './Sidebar.module.css';

interface Props {
  className?: string;
  onClose: () => void;
}

export default function Sidebar({ className, onClose }: Props) {
  const { trip, selectedDayId, selectDayId } = useContext<TripContextType>(TripContext);

  return (
    <aside className={className}>
      <h1 className={styles.title}>{trip?.trip_title}</h1>
      {trip?.days.length ? (
        <Accordion
          defaultActiveKey={selectedDayId?.toString()}
          onSelect={(id) => selectDayId(Number(id))}
        >
          {trip.days.map((day) => (
            <Accordion.Item eventKey={day.id.toString()} key={day.id}>
              <Accordion.Header>{`День ${day.id}: ${day.title}`}</Accordion.Header>
              <Accordion.Body>
                <div className={styles.activities}>
                  {day.activities.map((activity) => (
                    <ActivityCard key={activity.id} activity={activity} onClose={onClose} />
                  ))}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      ) : (
        <p>No data available</p>
      )}
    </aside>
  );
}
