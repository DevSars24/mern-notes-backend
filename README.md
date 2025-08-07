# 📝 MERN Notes Backend API

This is the **backend server** for the MERN Notes App built using **Node.js**, **Express**, and **MongoDB**. It provides clean and scalable REST APIs to handle **Create, Read, Update, and Delete (CRUD)** operations for notes.

---

## 🚀 Features

- RESTful API for Notes Management
- Built with **Express.js** and **Node.js**
- Connected with **MongoDB Atlas**
- Uses **Mongoose** for schema and models
- Clean modular structure for scalability
- Environment configuration using `.env`

---

## 📁 Folder Structure
<pre lang="text"> ## 📁 Folder Structure ```bash backend/ ├── config/ │ └── db.js # MongoDB connection ├── controllers/ │ └── notesController.js # Logic for handling note routes ├── models/ │ └── notesModel.js # Mongoose schema ├── routes/ │ └── notesroute.js # API endpoints ├── src/ │ └── server.js # Main server entry point ├── .env # Environment variables ├── package.json └── README.md ``` </pre>son
└── README.md


## ⚙️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **ODM**: Mongoose
- **Environment Config**: dotenv
- **Dev Tools**: Nodemon

---

## 🔐 Environment Variables

Create a `.env` file in the root of your `backend/` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
🚦 API Endpoints
Base URL: /api/notes

Method	Endpoint	Description
GET	/	Get all notes
POST	/	Create a new note
PUT	/:id	Update a note
DELETE	/:id	Delete a note

🧪 How to Run Locally
Clone the repository:


git clone https://github.com/DevSars24/mern-notes-backend.git
cd mern-notes-backend
Install dependencies:
npm install
Start the server with Nodemon:


nodemon src/server.js
🧠 Author
Saurabh Singh Rajput
2nd Year CSE @ IIIT Bhagalpur
Self-taught MERN Developer | Passionate about real-life projects



