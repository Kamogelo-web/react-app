import { useContext } from 'react';
import { EventContext } from '../context/EventContext';
import EventCard from '../components/events/EventCard';
import { Link } from 'react-router-dom';

function Dashboard() {
  const { events } = useContext(EventContext);
  
  // Sort events by date
  const sortedEvents = [...events].sort((a, b) => 
    new Date(a.date + 'T' + a.time) - new Date(b.date + 'T' + b.time)
  );

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Upcoming Events</h1>
        <Link to="/add-event" className="btn">Add Event</Link>
      </div>
      
      {sortedEvents.length === 0 ? (
        <p>No events scheduled. Add your first event!</p>
      ) : (
        <div className="events-grid">
          {sortedEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;