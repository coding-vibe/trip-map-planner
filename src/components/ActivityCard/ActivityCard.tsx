import { useContext, useEffect, useRef } from 'react';
import clsx from 'clsx';
import Card from 'react-bootstrap/Card';
import TripContext, { TripContextType } from '@/contexts/TripContext';
import useWindowWidth from '@/hooks/useWindowWidth';
import { Activity } from '@/types/trip';
import styles from './ActivityCard.module.css';

interface Props {
  activity: Activity;
  onClose: () => void;
}

const MOBILE_BREAKPOINT_IN_PX = 768;
const ANIMATION_TIMEOUT_IN_MS = 500;

export default function ActivityCard({ activity, onClose }: Props) {
  const { hoveredActivity, setSelectedActivity } = useContext<TripContextType>(TripContext);
  const ref = useRef<HTMLDivElement | null>(null);
  const width = useWindowWidth();

  const isMobile = width && width < MOBILE_BREAKPOINT_IN_PX;

  useEffect(() => {
    if (hoveredActivity?.id === activity.id) {
      ref.current?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }, [hoveredActivity?.id, activity.id]);

  const handleClick = () => {
    if (!isMobile) return;

    setSelectedActivity(activity);
    onClose();
    setTimeout(() => setSelectedActivity(null), ANIMATION_TIMEOUT_IN_MS);
  };

  return (
    <Card
      ref={ref}
      className={clsx(styles.card, hoveredActivity?.id === activity.id && styles.hovered)}
      onClick={handleClick}
      onMouseEnter={() => {
        if (!isMobile) setSelectedActivity(activity);
      }}
      onMouseLeave={() => {
        if (!isMobile) setSelectedActivity(null);
      }}
    >
      <Card.Img variant="top" src={activity.photo_url} />
      <Card.Body>
        <Card.Title>{activity.name}</Card.Title>
        <Card.Text>{activity.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
