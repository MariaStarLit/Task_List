# Task_List SPA

A simple single-page application built with **React + Vite + TypeScript** that displays a list of tasks from a REST API.

### Features

- Two menus:
  - **Home**: Landing page with simple text.
  - **Tasks**: Displays a list of tasks from the backend API [tasks-api](https://github.com/MarceloFonseca/tasks-api).

---

## Usage instructions

###1. Setup Task_List App 
Clone my repository:
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

###2: Setup API
Clone this repository:
```bash
cd ..
git clone https://github.com/MarceloFonseca/tasks-api.git
cd tasks-api
```
Install dependencies:
```bash
npm install
```
Start the API (on port 3008, new task every 60s):
```bash
npm install
PORT=3008 NEW_TASK_PERIOD=60000 npm start
```
API will be available at:
http://localhost:3008/api/tasks/

###3: Run Task_List
```bash
cd ../Task_List
npm run dev
```
Open the app in the browser:
# http://localhost:5173
