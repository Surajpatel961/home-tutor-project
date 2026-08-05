# 📚 EduShare

A full-stack educational platform that enables faculty to upload study notes and students to securely access and download them.

## 🚀 Live Backend

https://edushare-7p3s.onrender.com/

## ✨ Features

- JWT Authentication
- Role-Based Authorization
- Secure Password Hashing (bcrypt)
- Faculty-only PDF Upload
- Cloudinary File Storage
- CRUD Operations
- Search Notes
- Filter Notes
- Pagination
- Sorting
- Download Counter
- MongoDB Atlas
- RESTful APIs

- ## 🛠️ Tech Stack

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication & Security
- JWT (JSON Web Token)
- bcrypt

### File Upload
- Multer

### Cloud Storage
- Cloudinary

### API Testing
- Postman

### Deployment
- Render

### Version Control
- Git
- GitHub

 ## 📂 Project Structure

```text
EduShare/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── validators/
│   ├── app.js
│   └── index.js
│
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── .env.example
```
└── .gitignore

## 📡 API Endpoints

### 🔐 Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user and return JWT token |

---

### 📚 Notes

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/notes/upload` | Upload a new PDF note | Faculty |
| GET | `/api/notes` | Get all notes (supports search, filter, pagination & sorting) | Public |
| GET | `/api/notes/:id` | Get a note by ID | Public |
| PUT | `/api/notes/:id` | Update a note | Faculty (Owner Only) |
| DELETE | `/api/notes/:id` | Delete a note and remove PDF from Cloudinary | Faculty (Owner Only) |
| PATCH | `/api/notes/download/:id` | Increment download count | Public |

---

### 🔍 Query Parameters

| Parameter | Description |
|-----------|-------------|
| `search` | Search notes by title or subject |
| `subject` | Filter notes by subject |
| `semester` | Filter notes by semester |
| `page` | Page number for pagination |
| `limit` | Number of notes per page |
| `sort` | Sort by `latest`, `oldest`, or `downloads` |

---

### ❤️ Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Check if the backend is running |
