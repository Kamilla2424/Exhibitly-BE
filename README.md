# Exhibitly Backend

This is a backend server for the **Exhibitly** full-stack web application that allows users to browse and manage an art gallery. It handles user authentication, artwork data retrieval, and personal collection (exhibition) management. The backend is built using Node.js, Express, and MongoDB.

## Features
- **User Authentication**: Users can log in with their credentials to access the app.
- **Artworks**: Provides API access to browse a gallery of artworks with images and descriptions.
- **Search Functionality**: Users can search for artworks by name or category.
- **Collection Management**: Users can add artworks to their personal collection (exhibition).

## Technologies Used

### Backend:
- Node.js
- Express
- MongoDB
- JWT (JSON Web Token) for authentication
- RESTful API for handling requests

### Hosting:
- Frontend: Render
- Backend: Render

## Setup Instructions

### Prerequisites
Ensure you have the following tools installed:
- **Node.js**: [Download Node.js](https://nodejs.org)
- **npm**: Comes with Node.js, but can be updated separately if needed.

Set up the frontend from this repo: [Exhibitly Frontend](https://github.com/Kamilla2424/Exhibitly-FE) – the instructions will be in that README.

### Backend Setup

1. Clone the backend repository to your local machine:
    ```bash
    git clone https://github.com/Kamilla2424/Exhibitly-BE
    ```

2. Navigate into the backend project directory:
    ```bash
    cd Exhibitly-BE
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your environment variables. Example:
    ```
    MONGO_URI=mongodb://your-database-uri
    JWT_SECRET=your-jwt-secret
    ```

5. Start the server:
    ```bash
    npm start
    ```
    The backend server should now be running at `http://localhost:9090`.

---

## How to Deploy

### 1. **Deploy the Backend**
   To deploy the backend, follow these steps:

   - Clone the backend repository:
     ```bash
     git clone https://github.com/Kamilla2424/Exhibitly-BE
     ```

   - Navigate into the backend directory:
     ```bash
     cd exhibitly-backend
     ```

   - Install the required dependencies:
     ```bash
     npm install
     ```

   - Create a `.env` file to store environment variables (e.g., database URI, JWT secret).

   - Start the server:
     ```bash
     npm start
     ```

   - The backend will be available at `http://localhost:9090` or any configured port.

   For deployment on **Render** or **Heroku**, refer to the respective documentation for setting up Node.js apps.

   **Example for Render**:
   - Create a new **Web Service** on Render.
   - Link the backend repository.
   - Set the build and start commands:
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`

---

## Usage

### Login
Users can log in using their credentials.

### Search
A search bar allows users to filter artworks by name.

### Browse Artworks
Artworks are displayed with images and titles.

### Add to Collection
Users can add artworks to their collection by clicking the "Add to Exhibition" button.

### Responsive
The layout adapts to both desktop and mobile screens.

---

## API Documentation

The frontend uses these APIs for artworks:
- [Harvard Art Museums API](https://api.harvardartmuseums.org/object)
- [Cleveland Art API](https://openaccess-api.clevelandart.org/api/artworks/)

The backend exposes the following endpoints:

| Endpoint             | Description                       |
|----------------------|-----------------------------------|
| `GET /api/users`     | Get all users                    |
| `POST /api/users`    | Register a new user              |



