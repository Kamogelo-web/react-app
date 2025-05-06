import { useState, useContext } from 'react';
import { EventContext } from '../../context/EventContext';
import { format } from 'date-fns';

function EventForm({ eventToEdit, onCancel }) {
  const { addEvent, updateEvent } = useContext(EventContext);
  const [formData, setFormData] = useState(eventToEdit || {
    name: '',
    date: format(new Date(), 'yyyy-MM-dd'),
    time: '12:00',
    description: '',
    location: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Event name is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    const event = {
      ...formData,
      id: eventToEdit?.id || Date.now()
    };
    
    if (eventToEdit) {
      updateEvent(event.id, event);
    } else {
      addEvent(event);
    }
    onCancel();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <h2>{eventToEdit ? 'Edit Event' : 'Add New Event'}</h2>
      
      <div className="form-group">
        <label>Event Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label>Date *</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>
        
        <div className="form-group">
          <label>Time *</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
          {errors.time && <span className="error">{errors.time}</span>}
        </div>
      </div>
      
      <div className="form-group">
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="e.g. Conference Room A"
        />
      </div>
      
      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
          placeholder="Add details about your event..."
        />
      </div>
      
      <div className="form-actions">
        <button type="button" onClick={onCancel} className="btn btn-secondary">
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          {eventToEdit ? 'Update Event' : 'Add Event'}
        </button>
      </div>
    </form>
  );
}

export default EventForm;