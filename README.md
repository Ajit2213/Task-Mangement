# Task Management App

## 🚀 Live Demo
[Task Management App](https://task-mangement-frontend.onrender.com)

## 📌 Description
A simple and efficient Task Management application built with the MERN stack. Users can create, update, and manage tasks seamlessly.

## 🛠️ Tech Stack
- **Frontend**: React.js, Axios
- **Backend**: Node.js, Express.js, MongoDB
- **Hosting**:
  - Frontend: Render
  - Backend: Render

## 📂 Folder Structure
```
📦 Task-Management-App
 ┣ 📂 backend
 ┃ ┣ 📜 server.js
 ┃ ┣ 📂 routes
 ┃ ┃ ┗ 📜 taskRoutes.js
 ┃ ┣ 📂 models
 ┃ ┃ ┗ 📜 Task.js
 ┃ ┣ 📂 controllers
 ┃ ┃ ┗ 📜 taskController.js
 ┣ 📂 frontend
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┃ ┣ 📜 TaskList.js
 ┃ ┃ ┃ ┣ 📜 TaskForm.js
 ┃ ┃ ┣ 📜 App.js
 ┃ ┃ ┣ 📜 index.js
 ┃ ┃ ┗ 📜 api.js (Axios instance)
 ┣ 📜 README.md
 ┣ 📜 package.json
```

## 🚀 Getting Started
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/task-management-app.git
cd task-management-app
```
### 2️⃣ Install Dependencies
#### Backend
```sh
cd backend
npm install
```
#### Frontend
```sh
cd frontend
npm install
```
### 3️⃣ Set Up Environment Variables
Create a **.env** file in the **backend** folder and add:
```
PORT=8080
MONGO_URI=your_mongodb_connection_string
```
### 4️⃣ Run the Application
#### Backend
```sh
cd backend
npm start
```
#### Frontend
```sh
cd frontend
npm start
```
The frontend will be available at `http://localhost:3000` and the backend at `http://localhost:8080`.

## 🌍 Deployment
### **Frontend** (Render)
1. Push your frontend code to GitHub.
2. Go to [Render](https://render.com/) → Create a New Web Service.
3. Connect your GitHub repo & deploy.
4. Add your backend URL in `.env` or directly in API calls.

### **Backend** (Render)
1. Push your backend code to GitHub.
2. Go to [Render](https://render.com/) → Create a New Web Service.
3. Set environment variables (MONGO_URI, PORT).
4. Deploy and copy the backend URL for frontend use.

## 🔧 API Endpoints
| Method | Endpoint            | Description            |
|--------|---------------------|------------------------|
| GET    | /task/view         | Get all tasks         |
| POST   | /task/create       | Create a new task     |
| PUT    | /task/update/:id   | Update a task         |
| DELETE | /task/delete/:id   | Delete a task         |

## 📌 Features
✅ User-friendly UI for task management  
✅ Create, update, and delete tasks  
✅ Backend with Express.js and MongoDB  
✅ Secure API calls with CORS handling  
✅ Hosted on Render (Frontend & Backend)  

## 🛠 Troubleshooting
**CORS Issue?**
- Ensure CORS is enabled in `server.js`:
```js
app.use(cors({
  origin: "https://task-mangement-frontend.onrender.com",
  methods: "GET, POST, PUT, DELETE",
  credentials: true,
}));
```

**Backend Not Responding?**
- Check if the backend is running on Render.
- Verify API calls using Postman.

## 📌 Contributing
Feel free to fork, clone, and raise pull requests!

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

