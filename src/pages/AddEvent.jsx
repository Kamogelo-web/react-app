import EventForm from '../components/events/EventForm';
import { useNavigate } from 'react-router-dom';

function AddEvent() {
  const navigate = useNavigate();

  return (
    <div className="add-event-page">
      <h1>Add New Event</h1>
      <EventForm onCancel={() => navigate('/dashboard')} />
    </div>
  );
}

export default AddEvent;