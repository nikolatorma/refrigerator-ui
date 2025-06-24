🧊 Refrigerator UI
A responsive Angular 19 single-page application for managing fridge and freezer inventory, integrated with the Refrigerator API backend.

📦 Tech Stack
Angular 19

RxJS

Angular Material (optional)

TypeScript

Docker (optional for containerized build)

🚀 Getting Started
🔧 Prerequisites
Node.js (v18+ recommended)

Angular CLI

📦 Install Dependencies
bash
Copy
Edit
npm install
🖥️ Run the Application
bash
Copy
Edit
ng serve
Visit: http://localhost:4200

🌐 API Backend
This app expects a running instance of the Refrigerator API backend.

Backend API URL is typically:

bash
Copy
Edit
http://localhost:8080/api/goods
If different, update the environment.ts file accordingly:

typescript
Copy
Edit
export const environment = {
  apiUrl: 'http://localhost:8080/api'
};

🎨 Features
List all goods from the refrigerator

Add, edit, delete fridge items

Visual expiration tracking

Integrates with backend OpenAPI endpoints

📸 Screenshots (optional section if you'd like)
Dashboard	Add Item Form

🐳 Docker Support (optional)
To build and run your Angular frontend in a Docker container:

Build the production app:

bash
Copy
Edit
ng build --prod
Use a simple Nginx-based Dockerfile:

dockerfile
Copy
Edit
FROM nginx:alpine
COPY ./dist/refrigerator-ui /usr/share/nginx/html
Build & run:

bash
Copy
Edit
docker build -t refrigerator-ui .
docker run -d -p 4200:80 refrigerator-ui
📃 License
No license — all rights reserved.

📬 Contact
Nikola Torma — GitHub