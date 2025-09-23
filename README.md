# Task_List SPA

A simple single-page application built with **React + Vite + TypeScript** that displays a list of tasks from a REST API.

### Features

- Two menus:
  - **Home**: Landing page with simple text.
  - **Tasks**: Displays a list of tasks from the backend API [tasks-api](https://github.com/MarceloFonseca/tasks-api).

---

## Usage instructions

This application consists of two components:
 - Frontend: [Task_List](https://github.com/MariaStarLit/Task_List)
 - Backend: [tasks-api](https://github.com/MarceloFonseca/tasks-api).

Both components must be running at the same time for the app to function correctly.
It’s recommended to keep two separate terminal windows open, one for the frontend and another for the backend.

### 1. Build Frontend
Clone the frontend repository:
```bash
git clone https://github.com/MariaStarLit/Task_List.git
cd Task_List
```
Make sure you have Node.js and npm installed:
```bash
node -v #Node.js version >=18 is recommended 
npm -v
```
Install frontend dependencies:
```bash
npm install
```

### 2. Build and Run Backend
Clone the backend repository:
```bash
cd ..
git clone https://github.com/MarceloFonseca/tasks-api.git
cd tasks-api
```
Start the backend (tasks-api) on port 3008 (a new task will be generated every 60 seconds):
```bash
npm install
PORT=3008 NEW_TASK_PERIOD=60000 npm start
```
API will be available at: http://localhost:3008/api/tasks 

### 3. Run Frontend
Go back to the frontend directory (Task_List) and start the app:
```bash
cd ../Task_List
npm run dev
```
Open the app in the browser: http://localhost:5173
