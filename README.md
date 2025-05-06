# Personal Event Planner

![App Screenshot](./public/screenshot.png) <!-- Add a screenshot later -->

A web application to help users organize and manage personal or professional events with authentication and CRUD functionality.

## Features

- User registration and login
- Create, view, update, and delete events
- Responsive design for all devices
- Help section with usage instructions
- Persistent data using localStorage

## Technologies Used

- React
- Vite
- React Router
- Context API
- date-fns (for date handling)
- React Icons

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/event-planner.git
   cd event-planner
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure


event-planner/
public/              # Static files
src/
   components/      # Reusable components
   context/         # Context providers
          AuthContext.jsx
          EventContext.jsx
   pages/           # Page components
        AddEvent.jsx
        Dashboard.jsx
        Home.jsx
        Help.jsx
   styles/       # CSS files
         main.css
         variables.css
App.jsx          # Main app component
main.jsx         # Entry point
.gitignore
index.html
package.json
README.md
vite.config.js


## Available Scripts

- `npm run dev`: Starts development server
- `npm run build`: Creates production build
- `npm run preview`: Previews production build locally

## Code Style

This project follows:
- Google JavaScript Style Guide
- Consistent 2-space indentation
- Descriptive variable and component names
- Functional components with hooks
- Proper file and folder structure

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
