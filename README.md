## 🌐 Live Demo

🚀 Experience the project live here:

[StayVista Live Demo](https://stay-vista-a-stay-booking-app.vercel.app/listings?utm_source=chatgpt.com)

---

# StayVista 🏡 – Full Stack Stay Booking Web Application

## 📌 Project Overview

**StayVista** is a modern full-stack stay booking and property listing platform inspired by Airbnb.
Users can explore stays, create listings, upload property images, review properties, and manage bookings through a responsive and interactive UI.

The project focuses on:

* Full-stack web development
* Authentication & authorization
* CRUD operations
* Cloud image storage
* Responsive UI/UX
* Backend API integration
* Secure session handling

---

# 🚀 Live Features

## 👤 User Authentication & Authorization

* Secure Signup/Login system
* Session-based authentication
* Password encryption using bcrypt
* Protected routes for authorized users
* User logout functionality
* Flash messages for authentication feedback

---

## 🏠 Property Listings

### Users can:

* Create new stay listings
* Upload property images
* Add:

  * Title
  * Description
  * Price
  * Location
  * Country
* Edit existing listings
* Delete listings
* View all listings
* View detailed single listing page

---

## 🖼️ Image Upload & Cloud Storage

* Image uploads handled using Multer
* Cloudinary integration for cloud image storage
* Automatic image optimization
* Secure media handling

---

## ⭐ Reviews & Ratings

Users can:

* Add reviews to listings
* Give ratings
* Delete their own reviews
* View all reviews on listing detail page

---

## 🔐 Authorization Features

* Only listing owner can:

  * Edit listing
  * Delete listing

* Only review owner can:

  * Delete review

* Unauthorized access is prevented using middleware

---

## 📍 Map & Location Features

* Location-based stay details
* Country & city information display
* Map integration support (if configured)

---

## 🎨 Modern UI/UX

### Features:

* Responsive design
* Mobile-friendly layout
* Bootstrap-based UI
* Modern cards & navbar
* Interactive filters
* Stylish property detail pages
* Tax display support
* Search functionality UI

---

# 🛠️ Tech Stack

## Frontend

* HTML5
* CSS3
* Bootstrap 5
* JavaScript
* EJS Templating Engine

---

## Backend

* Node.js
* Express.js

---

## Database

* MongoDB
* Mongoose ODM

---

## Authentication & Security

* Passport.js
* Passport Local Strategy
* Express Session
* Connect Flash
* bcrypt

---

## File Upload & Cloud

* Multer
* Cloudinary
* Multer-Storage-Cloudinary

---

## Deployment

* Vercel
* MongoDB Atlas
* GitHub

---

# 📂 Project Structure

```bash
StayVista/
│
├── models/             # Mongoose Schemas
├── routes/             # Express Routes
├── controllers/        # Route Controllers
├── middleware.js       # Custom Middleware
├── views/              # EJS Templates
├── public/             # Static Assets (CSS/JS)
├── utils/              # Utility Functions
├── cloudConfig.js      # Cloudinary Config
├── app.js              # Main Server File
├── schema.js           # Joi Validation Schema
└── package.json
```

---

# ⚙️ Important Functionalities

## ✅ CRUD Operations

### Listings

| Operation | Functionality    |
| --------- | ---------------- |
| Create    | Add new property |
| Read      | View listings    |
| Update    | Edit property    |
| Delete    | Remove property  |

---

## ✅ Review System

| Feature       | Description            |
| ------------- | ---------------------- |
| Add Review    | Users can review stays |
| Rating        | Star-based ratings     |
| Delete Review | Owner-only delete      |

---

## ✅ Authentication Flow

```text
Signup → Login → Session Created → Access Protected Routes
```

---

## ✅ Middleware Protection

Custom middleware used for:

* Authentication checks
* Authorization checks
* Validation handling
* Async error handling

---

# 🔒 Security Features

* Password hashing
* Input validation using Joi
* Protected routes
* Session security
* Authorization middleware
* MongoDB injection protection via Mongoose

---

# 📸 Cloudinary Integration

Features:

* Cloud image hosting
* Fast CDN delivery
* Image optimization
* Secure uploads

---

# 🌐 Deployment

## Frontend & Backend

Hosted on:

* [Vercel](https://vercel.com?utm_source=chatgpt.com)

---

## Database Hosting

Hosted on:

* [MongoDB Atlas](https://www.mongodb.com/atlas/database?utm_source=chatgpt.com)

---

## Source Code

Repository:

* [StayVista GitHub Repository](https://github.com/YashPanchalp/StayVista-A-stay-booking-app-?utm_source=chatgpt.com)

---

# 🧠 Concepts Learned

This project demonstrates understanding of:

* MVC Architecture
* RESTful Routing
* Authentication & Authorization
* Session Management
* File Upload Handling
* Cloud Storage
* MongoDB Relationships
* Middleware Usage
* Error Handling
* Full Stack Deployment

---

# 📦 Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/YashPanchalp/StayVista-A-stay-booking-app-.git
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Create `.env` File

```env
ATLASDB_URL=your_mongodb_url

CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_key
CLOUD_API_SECRET=your_cloudinary_secret

SECRET=session_secret
```

---

## 4️⃣ Run Project

```bash
node app.js
```

or

```bash
nodemon app.js
```

---

# 📷 Future Improvements

* Booking system
* Payment gateway integration
* Wishlist functionality
* Advanced filters
* Google Maps integration
* Real-time chat
* Admin dashboard
* Property availability calendar
* AI-powered stay recommendations

---

# 👨‍💻 Author

## Yash Panchal

* Full Stack Developer
* MERN Stack Enthusiast
* Backend Focused Developer

GitHub:

* [Yash Panchal GitHub](https://github.com/YashPanchalp?utm_source=chatgpt.com)

---

# ⭐ Support

If you liked this project:

* Star the repository
* Fork the project
* Share feedback

---

# 📄 License

This project is licensed under the MIT License.
