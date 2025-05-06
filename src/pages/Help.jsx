function Help() {
    return (
      <div className="help-page">
        <h1>Help Center</h1>
        
        <section>
          <h2>Getting Started</h2>
          <p>Welcome to the Personal Event Planner! Follow these steps to get started:</p>
          <ol>
            <li>Register for an account or log in if you already have one</li>
            <li>Navigate to your Dashboard to view upcoming events</li>
            <li>Click "Add Event" to schedule new events</li>
          </ol>
        </section>
        
        <section>
          <h2>Managing Events</h2>
          <h3>Creating Events</h3>
          <p>To create a new event:</p>
          <ul>
            <li>Click "Add Event" in the navigation</li>
            <li>Fill in all required fields (name, date, time)</li>
            <li>Optionally add a description and location</li>
            <li>Click "Save" to add the event</li>
          </ul>
          
          <h3>Editing Events</h3>
          <p>To edit an existing event:</p>
          <ul>
            <li>Click on the event in your Dashboard</li>
            <li>Make your changes to any of the fields</li>
            <li>Click "Update" to save your changes</li>
          </ul>
          
          <h3>Deleting Events</h3>
          <p>To delete an event:</p>
          <ul>
            <li>Open the event you want to delete</li>
            <li>Click the "Delete" button</li>
            <li>Confirm the deletion in the popup</li>
          </ul>
        </section>
        
        <section>
          <h2>Tips for Effective Event Planning</h2>
          <ul>
            <li>Schedule important events well in advance</li>
            <li>Set reminders for time-sensitive events</li>
            <li>Use the description field to add important details</li>
            <li>Regularly review your upcoming events</li>
          </ul>
        </section>
      </div>
    );
  }
  
  export default Help;