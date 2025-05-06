import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { EventContext } from '../../context/EventContext';
import Modal from '../ui/Modal';
import EventForm from './EventForm';
import { FiTrash2, FiEdit } from 'react-icons/fi';

function EventCard({ event }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { deleteEvent } = useContext(EventContext);
  
  const formattedDate = format(parseISO(event.date), 'MMM dd, yyyy');
  const formattedTime = format(new Date(`2000-01-01T${event.time}`), 'h:mm a');

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      deleteEvent(event.id);
    }
  };

  return (
    <div className="event-card">
      <div className="event-content">
        <h3>{event.name}</h3>
        <div className="event-meta">
          <span className="event-date">{formattedDate}</span>
          <span className="event-time">{formattedTime}</span>
          {event.location && (
            <span className="event-location">{event.location}</span>
          )}
        </div>
        {event.description && (
          <p className="event-description">{event.description}</p>
        )}
      </div>
      
      <div className="event-actions">
        <button 
          onClick={() => setIsEditModalOpen(true)}
          className="btn btn-sm btn-edit"
        >
          <FiEdit /> Edit
        </button>
        <button 
          onClick={handleDelete}
          className="btn btn-sm btn-delete"
        >
          <FiTrash2 /> Delete
        </button>
      </div>
      
      <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <EventForm 
          eventToEdit={event} 
          onCancel={() => setIsEditModalOpen(false)}
        />
      </Modal>
    </div>
  );
}

export default EventCard;