# Railway Markers App

This is a full-stack React application with an Express backend, designed to visualize railway markers on an interactive map.

## Prerequisites

- **Node.js**: Version 18 or higher.
- **Visual Studio Code**: Recommended IDE.
- **MySQL** (Optional): If you want to use a real database instead of mock data.

## Step-by-Step Setup Guide

### 1. Open in Visual Studio Code
1. Download or clone this repository.
2. Open Visual Studio Code.
3. Go to **File** > **Open Folder...** and select the project folder.

### 2. Install Dependencies
Open the integrated terminal in VS Code (`Ctrl + \`` or **Terminal** > **New Terminal**) and run:

```bash
npm install
```

### 3. Configure Environment Variables
1. Create a new file named `.env` in the root directory.
2. Copy the contents from `.env.example` into `.env`.
3. (Optional) If you have a MySQL database, update the `DB_` variables in `.env`.

**Example `.env`:**
```env
APP_URL="http://localhost:3000"

# Database Configuration (Optional - app will use mock data if connection fails)
DB_HOST="localhost"
DB_USER="root"
DB_PASSWORD="your_password"
DB_NAME="railway_markers"
```

### 4. Database Setup (Optional)
If you want to use a real database:
1. Make sure MySQL is running.
2. Create a database named `railway_markers`.
3. Run the SQL commands in `schema.sql` to create the tables.

### 5. Run the Application
In the VS Code terminal, run:

```bash
npm run dev
```

The server will start, and you should see output like:
```
Server running on http://localhost:3000
```

Open your browser and navigate to `http://localhost:3000`.

## Project Structure

- **server.ts**: Main entry point for the Express backend.
- **src/components**: React components (MapViewer, etc.).
- **src/routes**: Backend API routes.
- **src/db**: Database connection logic.

## Troubleshooting

- **"vite: command not found"**: Run `npm install` again to ensure all dependencies are installed.
- **Database errors**: The app will automatically fall back to mock data if the database connection fails. Check your `.env` credentials if you intend to use the database.
