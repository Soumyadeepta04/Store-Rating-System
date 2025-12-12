# 🚀 Store Rating System - Full Stack Application

A modern, full-stack store rating platform built with React, Node.js, Express, PostgreSQL, and stunning glass-morphism UI design featuring role-based access control for seamless user experience.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.2.1-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🌐 Live Demo

- **Application:** [https://store-rating-system-b4bv.vercel.app/](https://store-rating-system-b4bv.vercel.app/)

---

## 🎬 Project Walkthrough Video

<div align="center">
  <!-- Video will be added here -->
  <p><i>Project walkthrough video coming soon...</i></p>
</div>

## 📸 Application Screenshots

<div align="center">
  <!-- Screenshots will be added here -->
  <p><i>Screenshots will be added soon...</i></p>
</div>

<br/>

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Local Development Setup](#-local-development-setup)
- [Demo Accounts](#-demo-accounts)
- [API Documentation](#-api-documentation)
- [Deployment Guide](#-deployment-guide)
- [Environment Variables](#-environment-variables)
- [Security Features](#-security-features)
- [Database Schema](#-database-schema)
- [Validation Rules](#-validation-rules)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 📖 Project Overview

A beautiful, full-stack web application for rating and reviewing stores with stunning glass-morphism UI design and comprehensive role-based access control system.

### What This Application Does:

✅ Frontend built with React 19, Vite, and TailwindCSS  
✅ Backend API with Node.js, Express, and Prisma ORM  
✅ PostgreSQL database hosted on NeonDB (cloud)  
✅ JWT-based authentication with bcrypt password hashing  
✅ Three user roles: Admin, Store Owner, and Customer  
✅ Interactive 5-star rating system for stores  
✅ Real-time dashboard analytics and statistics  
✅ Production deployment on Vercel

### You'll See:

- 🎨 **Stunning Glass-morphism UI** - Frosted glass effects with animated gradient backgrounds
- 👑 **Admin Dashboard** - User and store management with real-time statistics
- 🏪 **Store Owner Dashboard** - Monitor ratings, feedback, and business insights
- 👤 **Customer Portal** - Browse stores, submit ratings, and update reviews
- 📱 **Fully Responsive** - Perfect experience on mobile, tablet, and desktop
- 🔐 **Secure Authentication** - JWT tokens with 7-day expiry and role-based access

---

## ✨ Features

### 🎨 **Stunning UI/UX**

- 💎 **Glass-morphism Design** - Frosted glass effects with backdrop blur
- 🌈 **Animated Gradients** - Dynamic floating blob backgrounds
- ✨ **Smooth Animations** - Micro-interactions and smooth transitions
- 📱 **Fully Responsive** - Perfect on all devices (mobile/tablet/desktop)
- 🎭 **No Scrolling Login** - Compact, single-screen authentication forms
- 🎨 **Modern Color Palette** - Purple-indigo gradients with beautiful accents

### 🔐 **Authentication & Security**

- 🎫 **JWT Authentication** - Token-based auth with 7-day expiry
- 🔒 **bcrypt Password Hashing** - 10 salt rounds for maximum security
- 👮 **Role-Based Access Control** - Three distinct roles (Admin, Customer, Store Owner)
- 🛡️ **Protected Routes** - Middleware authentication on frontend and backend
- ✅ **Input Validation** - Client-side and server-side validation
- 🔄 **Password Update** - Secure password change functionality

### 👑 **Admin Features**

- 📊 **Real-time Dashboard** - Statistics for users, stores, and ratings
- 👥 **User Management** - Create, view, filter, and sort users
- 🏪 **Store Management** - Create, view, filter, and sort stores
- 🔍 **Advanced Filtering** - Filter by role, status, and search functionality
- 📈 **Analytics Visualization** - Beautiful stat cards with icons and gradients
- 🎯 **Complete Control** - Full platform management capabilities

### 👤 **Customer Features**

- 🔍 **Browse Stores** - Beautiful card layouts with store information
- ⭐ **5-Star Rating System** - Interactive star selection with hover effects
- 🔄 **Update Ratings** - Modify existing ratings anytime
- 🎯 **Search & Filter** - Find stores easily with search functionality
- 📱 **Mobile Optimized** - Seamless experience on all devices
- 💬 **User Feedback** - View average ratings and your submissions

### 🏬 **Store Owner Features**

- 📊 **Professional Dashboard** - Comprehensive business statistics
- ⭐ **Average Rating Display** - Real-time rating calculations
- 👥 **Customer Feedback Table** - View all ratings with customer details
- 📅 **Rating Timestamps** - Track when ratings were submitted
- 💼 **Business Insights** - Total ratings count and performance metrics
- 🎯 **Store Analytics** - Monitor customer satisfaction trends

---

## 🛠️ Tech Stack

### Frontend

| Technology       | Version | Purpose                                   |
| ---------------- | ------- | ----------------------------------------- |
| **React**        | 19.2.0  | Modern UI library for building interfaces |
| **Vite**         | 7.2.4   | Lightning-fast build tool and dev server  |
| **React Router** | 7.9.6   | Client-side routing with protected routes |
| **TailwindCSS**  | 3.4.1   | Utility-first CSS framework for styling   |
| **Axios**        | 1.13.2  | HTTP client for API requests              |
| **Lucide React** | Latest  | Beautiful icon library                    |

### Backend

| Technology     | Version | Purpose                                   |
| -------------- | ------- | ----------------------------------------- |
| **Node.js**    | 18+     | JavaScript runtime environment            |
| **Express**    | 5.2.1   | Fast, minimalist web framework            |
| **Prisma**     | 5.22.0  | Next-generation ORM for type-safe queries |
| **PostgreSQL** | Latest  | Powerful relational database (NeonDB)     |
| **JWT**        | Latest  | JSON Web Tokens for authentication        |
| **bcryptjs**   | Latest  | Password hashing library                  |
| **CORS**       | Latest  | Cross-origin resource sharing middleware  |

### Database

**PostgreSQL on NeonDB** (Cloud-hosted, serverless)

**Schema:**

```prisma
User {
  id        UUID (Primary Key)
  name      String
  email     String @unique
  password  String (hashed)
  address   String
  role      Enum (ADMIN, USER, STORE_OWNER)
  store     Store? (One-to-One)
  ratings   Rating[] (One-to-Many)
}

Store {
  id        UUID (Primary Key)
  name      String
  email     String @unique
  address   String
  ownerId   UUID @unique (Foreign Key)
  owner     User (One-to-One)
  ratings   Rating[] (One-to-Many)
}

Rating {
  id        UUID (Primary Key)
  rating    Integer (1-5)
  userId    UUID (Foreign Key)
  storeId   UUID (Foreign Key)
  user      User (Many-to-One)
  store     Store (Many-to-One)
  @@unique([userId, storeId])
}
```

---

## 📁 Project Structure

```
📦 Store-Rating-System/
│
├── 📂 backend/                    # Node.js/Express Backend
│   ├── index.js                   # Application entry point
│   ├── package.json               # Backend dependencies
│   ├── vercel.json                # Vercel deployment config
│   ├── 📂 prisma/
│   │   ├── schema.prisma          # Database schema definition
│   │   └── seed.js                # Database seeding script
│   ├── 📂 src/
│   │   ├── server.js              # Express server setup
│   │   ├── 📂 config/
│   │   │   └── db.js              # Database connection config
│   │   ├── 📂 controllers/
│   │   │   ├── adminController.js # Admin business logic
│   │   │   ├── authController.js  # Authentication logic
│   │   │   ├── storeController.js # Store owner logic
│   │   │   └── userController.js  # Customer logic
│   │   ├── 📂 middleware/
│   │   │   └── authMiddleware.js  # JWT verification middleware
│   │   ├── 📂 routes/
│   │   │   ├── adminRoutes.js     # Admin API routes
│   │   │   ├── authRoutes.js      # Authentication routes
│   │   │   ├── storeRoutes.js     # Store owner routes
│   │   │   └── userRoutes.js      # Customer routes
│   │   └── 📂 utils/
│   │       └── validation.js      # Input validation helpers
│   └── .env                       # Environment variables
│
├── 📂 frontend/                   # React/Vite Frontend
│   ├── index.html                 # HTML entry point
│   ├── package.json               # Frontend dependencies
│   ├── vite.config.js             # Vite configuration
│   ├── tailwind.config.js         # TailwindCSS configuration
│   ├── postcss.config.js          # PostCSS configuration
│   ├── eslint.config.js           # ESLint configuration
│   ├── vercel.json                # Vercel deployment config
│   ├── 📂 public/                 # Static assets
│   ├── 📂 src/
│   │   ├── main.jsx               # React entry point
│   │   ├── App.jsx                # Main application component
│   │   ├── App.css                # Application styles
│   │   ├── index.css              # Global styles + TailwindCSS
│   │   ├── 📂 assets/             # Images and static files
│   │   ├── 📂 components/
│   │   │   ├── Navbar.jsx         # Navigation component
│   │   │   └── PrivateRoute.jsx   # Protected route wrapper
│   │   ├── 📂 context/
│   │   │   └── AuthContext.jsx    # Authentication context
│   │   ├── 📂 pages/
│   │   │   ├── Login.jsx          # Login page
│   │   │   ├── Signup.jsx         # Registration page
│   │   │   ├── UpdatePassword.jsx # Password change page
│   │   │   ├── 📂 admin/
│   │   │   │   ├── AdminDashboard.jsx  # Admin overview
│   │   │   │   ├── AddUser.jsx         # Create user form
│   │   │   │   ├── AddStore.jsx        # Create store form
│   │   │   │   ├── UsersList.jsx       # Users management
│   │   │   │   └── StoresList.jsx      # Stores management
│   │   │   ├── 📂 store/
│   │   │   │   └── StoreDashboard.jsx  # Store owner panel
│   │   │   └── 📂 user/
│   │   │       └── UserStores.jsx      # Customer store browser
│   │   └── 📂 utils/
│   │       ├── api.js             # Axios configuration
│   │       └── validation.js      # Form validation utilities
│   └── .env                       # Frontend environment variables
│
└── 📄 README.md                   # This file
```

---

## 🚀 Local Development Setup

### Prerequisites

Make sure you have these installed on your machine:

- ✅ **Node.js 18+** → [Download Node.js](https://nodejs.org/)
- ✅ **npm or yarn** → Comes with Node.js
- ✅ **PostgreSQL Database** → Using [NeonDB](https://neon.tech/) (cloud-hosted, no local install needed)
- ✅ **Git** → [Download Git](https://git-scm.com/)

---

### ⚙️ Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/yourusername/Store-Rating-System.git

# Navigate to project directory
cd Store-Rating-System
```

---

### ⚙️ Step 2: Backend Setup (Node.js/Express)

#### 2.1 Navigate to backend folder

```bash
cd backend
```

#### 2.2 Install Node.js dependencies

```bash
npm install
```

**Dependencies installed:**

- express (5.2.1)
- prisma (5.22.0)
- @prisma/client
- jsonwebtoken
- bcryptjs
- cors
- dotenv

#### 2.3 Set up environment variables

Create a `.env` file in the backend directory:

```env
DATABASE_URL="your_neon_postgresql_connection_string"
JWT_SECRET="your_super_secret_jwt_key_here"
PORT=5000
NODE_ENV=development
```

**Important:** Get your NeonDB connection string from [neon.tech](https://neon.tech/)

#### 2.4 Initialize Prisma and Database

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push

# Seed database with demo data
npm run db:seed
```

✅ **Expected Output:**

```
✓ Database schema pushed successfully
✓ Prisma Client generated
✓ Demo data seeded: Admin, Store Owners, Customers, and Stores created
```

#### 2.5 Run the backend server

```bash
npm run dev
```

✅ **Backend is now running at:** `http://localhost:5000`

#### 2.6 Test the API

Open your browser or use curl:

- **Health Check:** http://localhost:5000/
- **API Status:** http://localhost:5000/api/

**Test with curl:**

```bash
# Health check
curl http://localhost:5000/
```

---

### 🎨 Step 3: Frontend Setup (React/Vite)

#### 3.1 Open a NEW terminal and navigate to frontend folder

```bash
cd frontend
```

**Important:** Keep the backend terminal running! Open a new terminal for frontend.

#### 3.2 Install Node.js dependencies

```bash
npm install
```

**Dependencies installed:**

- react (19.2.0)
- react-dom (19.2.0)
- react-router-dom (7.9.6)
- vite (7.2.4)
- tailwindcss (3.4.1)
- axios (1.13.2)
- lucide-react

#### 3.3 Set up environment variables

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:5000/api
```

This tells the frontend where to find the backend API.

#### 3.4 Run the Vite development server

```bash
npm run dev
```

✅ **Frontend is now running at:** `http://localhost:5173`

#### 3.5 Open in browser

Visit: **http://localhost:5173**

You should see:

- ✅ Beautiful landing page with glass-morphism design
- ✅ Login/Signup options in navigation
- ✅ Animated gradient backgrounds
- ✅ Responsive layout

---

## 🔑 Demo Accounts

### 👑 Administrator

```
📧 Email: sophia.anderson@ratemaster.com
🔒 Password: SuperAdmin@2024
```

**Access:** Full platform control, user management, store management, analytics

---

### 🏪 Store Owner

```
📧 Email: michael.chen@luxuryemporium.com
🔒 Password: Luxury@2024
```

**Access:** Store dashboard, view ratings, customer feedback, business statistics

---

### 👤 Customer

```
📧 Email: olivia.martinez@gmail.com
🔒 Password: Welcome@123
```

**Access:** Browse stores, submit ratings, update reviews, view store details

---

## 📡 API Documentation

### Base URL (Local Development)

```
http://localhost:5000/api
```

### Base URL (Production)

```
https://store-rating-system-b4bv.vercel.app/api
```

---

### Authentication Endpoints

#### 1. User Registration

```http
POST /api/auth/signup
```

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "SecurePass@123",
  "address": "123 Main Street, City, Country",
  "role": "USER"
}
```

**Response:**

```json
{
  "message": "User registered successfully",
  "user": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "USER"
  }
}
```

---

#### 2. User Login

```http
POST /api/auth/login
```

**Request Body:**

```json
{
  "email": "john.doe@example.com",
  "password": "SecurePass@123"
}
```

**Response:**

```json
{
  "message": "Login successful",
  "token": "jwt_token_here",
  "user": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "USER"
  }
}
```

---

#### 3. Update Password

```http
PUT /api/auth/update-password
```

**Headers:**

```
Authorization: Bearer <jwt_token>
```

**Request Body:**

```json
{
  "currentPassword": "OldPass@123",
  "newPassword": "NewPass@123"
}
```

---

### Admin Endpoints

#### 1. Get Dashboard Statistics

```http
GET /api/admin/dashboard
```

**Headers:** `Authorization: Bearer <jwt_token>`

**Response:**

```json
{
  "totalUsers": 10,
  "totalStores": 5,
  "totalRatings": 25,
  "averageRating": 4.2
}
```

---

#### 2. Create User

```http
POST /api/admin/users
```

**Headers:** `Authorization: Bearer <jwt_token>`

**Request Body:** (Same as signup)

---

#### 3. Create Store

```http
POST /api/admin/stores
```

**Headers:** `Authorization: Bearer <jwt_token>`

**Request Body:**

```json
{
  "name": "Tech Store",
  "email": "contact@techstore.com",
  "address": "456 Tech Avenue",
  "ownerId": "store_owner_user_id"
}
```

---

#### 4. Get All Users

```http
GET /api/admin/users
```

**Headers:** `Authorization: Bearer <jwt_token>`

---

#### 5. Get All Stores

```http
GET /api/admin/stores
```

**Headers:** `Authorization: Bearer <jwt_token>`

---

### Customer Endpoints

#### 1. Get All Stores

```http
GET /api/user/stores
```

**Headers:** `Authorization: Bearer <jwt_token>`

**Response:**

```json
[
  {
    "id": "uuid",
    "name": "Luxury Emporium",
    "email": "contact@luxury.com",
    "address": "789 Luxury Lane",
    "averageRating": 4.5,
    "totalRatings": 10,
    "userRating": 5
  }
]
```

---

#### 2. Submit/Update Rating

```http
POST /api/user/ratings
```

**Headers:** `Authorization: Bearer <jwt_token>`

**Request Body:**

```json
{
  "storeId": "store_uuid",
  "rating": 5
}
```

---

### Store Owner Endpoints

#### 1. Get Store Dashboard

```http
GET /api/store/dashboard
```

**Headers:** `Authorization: Bearer <jwt_token>`

**Response:**

```json
{
  "store": {
    "id": "uuid",
    "name": "Luxury Emporium",
    "email": "contact@luxury.com",
    "address": "789 Luxury Lane"
  },
  "averageRating": 4.5,
  "totalRatings": 10,
  "ratings": [
    {
      "id": "uuid",
      "rating": 5,
      "user": {
        "name": "John Doe",
        "email": "john@example.com"
      },
      "createdAt": "2025-01-15T10:30:00Z"
    }
  ]
}
```

---

## 🌐 Deployment Guide

### Deploy to Vercel (Full Stack)

**Vercel** is the recommended platform for deploying both frontend and backend.

---

### Step 1: Prepare for Deployment

Your project is already configured for Vercel:

- ✅ `vercel.json` files in both frontend and backend
- ✅ Proper build scripts in `package.json`
- ✅ Environment variable support

---

### Step 2: Deploy Backend

#### 2.1 Sign up/Login at [vercel.com](https://vercel.com)

#### 2.2 Import Backend

1. Click **"Add New..."** → **"Project"**
2. **Import your Git repository**
3. **Framework Preset:** Other
4. **Root Directory:** `backend` (Important!)
5. **Build Command:** Leave empty
6. **Output Directory:** Leave empty

#### 2.3 Set Environment Variables (Vercel - Backend)

In Vercel project settings:

1. Go to **Settings** → **Environment Variables**
2. Add:
   ```
   DATABASE_URL = your_neon_postgresql_connection_string
   JWT_SECRET = your_super_secret_jwt_key
   NODE_ENV = production
   ```

#### 2.4 Deploy Backend

Click **"Deploy"** and wait for completion.

**Note:** Copy your backend URL (e.g., `https://your-backend.vercel.app`)

---

### Step 3: Deploy Frontend

#### 3.1 Import Frontend

1. Click **"Add New..."** → **"Project"**
2. **Import the same Git repository**
3. **Framework Preset:** Vite (auto-detected)
4. **Root Directory:** `frontend` (Important!)
5. **Build Command:** `npm run build` (auto-filled)
6. **Output Directory:** `dist` (auto-filled)

#### 3.2 Set Environment Variables (Vercel - Frontend)

⚠️ **CRITICAL**

In Vercel project settings:

1. Go to **Settings** → **Environment Variables**
2. Add:
   ```
   VITE_API_URL = https://your-backend.vercel.app/api
   ```
   (Use your actual backend URL from Step 2.4)

**Important:** Must start with `VITE_` to be accessible in browser!

#### 3.3 Deploy Frontend

1. Click **"Deploy"**
2. Wait for build to complete (2-3 minutes)
3. Vercel will provide your live URL

---

### Step 4: Test Deployment

Visit your Vercel frontend URL and verify:

- ✅ Page loads without errors
- ✅ Login/signup works
- ✅ Dashboard displays after login
- ✅ Stores and ratings load correctly
- ✅ No CORS errors in browser console (F12)

---

### Post-Deployment Checklist

#### Backend

- [ ] API root endpoint accessible
- [ ] Authentication endpoints work
- [ ] Database connection successful
- [ ] JWT token generation works
- [ ] CORS allows frontend origin

#### Frontend

- [ ] Homepage loads without errors
- [ ] Login redirects to correct dashboard
- [ ] Store data displays properly
- [ ] Rating submission works
- [ ] Responsive design works on mobile
- [ ] All routes accessible

---

## 🔑 Environment Variables

### Backend (.env)

```env
# Database Connection
DATABASE_URL="postgresql://user:password@host/database?sslmode=require"

# JWT Secret (use a strong random string)
JWT_SECRET="your_super_secret_jwt_key_min_32_characters"

# Server Configuration
PORT=5000
NODE_ENV=development
```

**For Production (Vercel):**

- Set these in Vercel Dashboard → Settings → Environment Variables
- Never commit `.env` files to Git!

---

### Frontend (.env)

**Local Development:**

```env
VITE_API_URL=http://localhost:5000/api
```

**Production (Vercel):**

```env
VITE_API_URL=https://your-backend.vercel.app/api
```

**For Vercel Deployment:**

- Set `VITE_API_URL` in Vercel Dashboard → Settings → Environment Variables
- Must start with `VITE_` prefix!

---

## 🔒 Security Features

| Feature             | Implementation                          |
| ------------------- | --------------------------------------- |
| 🔐 Password Hashing | bcryptjs with 10 salt rounds            |
| 🎫 Authentication   | JWT tokens (7-day expiry)               |
| 👮 Authorization    | Role-based access control (RBAC)        |
| 🛡️ API Protection   | Middleware authentication on all routes |
| ✅ Input Validation | Client & server-side validation         |
| 🚫 SQL Injection    | Prisma ORM parameterized queries        |
| 🌐 CORS             | Configured allowed origins              |
| 🔄 Token Refresh    | Automatic token validation              |

---

## 📊 Database Schema

```prisma
model User {
  id        String   @id @default(uuid())
  name      String
  email     String   @unique
  password  String
  address   String
  role      Role     @default(USER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  store     Store?
  ratings   Rating[]
}

model Store {
  id        String   @id @default(uuid())
  name      String
  email     String   @unique
  address   String
  ownerId   String   @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  owner     User     @relation(fields: [ownerId], references: [id])
  ratings   Rating[]
}

model Rating {
  id        String   @id @default(uuid())
  rating    Int
  userId    String
  storeId   String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  user      User     @relation(fields: [userId], references: [id])
  store     Store    @relation(fields: [storeId], references: [id])

  @@unique([userId, storeId])
}

enum Role {
  ADMIN
  USER
  STORE_OWNER
}
```

**Relationships:**

- User ↔ Store: One-to-One (Store owner)
- User ↔ Rating: One-to-Many (Customer ratings)
- Store ↔ Rating: One-to-Many (Store ratings)
- Unique constraint on [userId, storeId] to prevent duplicate ratings

---

## 🎯 Validation Rules

| Field        | Rules                                        |
| ------------ | -------------------------------------------- |
| **Name**     | 20-60 characters                             |
| **Email**    | Valid email format, must be unique           |
| **Password** | 8-16 characters, 1 uppercase, 1 special char |
| **Address**  | Maximum 400 characters                       |
| **Rating**   | Integer between 1-5                          |

---

## 🐛 Troubleshooting

### Common Issues and Solutions

#### Backend Issues

**Issue:** `Module not found` errors

```bash
# Solution: Install dependencies
cd backend
npm install
```

**Issue:** Database connection error

```bash
# Solution: Check DATABASE_URL in .env file
# Ensure NeonDB connection string is correct
# Verify database is accessible

# Test connection
npx prisma db push
```

**Issue:** Port already in use (5000)

```bash
# Solution: Change port in .env or kill the process
# Windows:
netstat -ano | findstr :5000
taskkill /PID <process_id> /F

# Or use different port
PORT=5001 npm run dev
```

---

#### Frontend Issues

**Issue:** `VITE_API_URL is not defined`

```bash
# Solution: Create .env file in frontend directory
echo VITE_API_URL=http://localhost:5000/api > .env
```

**Issue:** CORS error in browser console

```bash
# Solution: Verify backend CORS configuration
# Check that frontend origin is allowed in backend
# Restart both frontend and backend servers
```

**Issue:** npm install fails

```bash
# Solution: Clear cache and reinstall
cd frontend
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

---

#### Authentication Issues

**Issue:** JWT token expired or invalid

```bash
# Solution:
# 1. Clear browser localStorage
# 2. Log out and log in again
# 3. Check JWT_SECRET matches between login and verify
```

**Issue:** Password validation fails

```bash
# Solution: Ensure password meets requirements:
# - 8-16 characters
# - At least 1 uppercase letter
# - At least 1 special character
```

---

#### Database Issues

**Issue:** Prisma schema out of sync

```bash
# Solution: Regenerate Prisma Client
cd backend
npx prisma generate
npx prisma db push
```

**Issue:** Seed data not populated

```bash
# Solution: Run seed script manually
cd backend
npm run db:seed
```

---

#### Deployment Issues

**Vercel: Build fails**

- Check `vercel.json` configuration
- Verify Root Directory is set correctly (frontend or backend)
- Ensure all dependencies are in `package.json`

**Vercel: Environment variable not working**

- Verify variable name (VITE\_ prefix for frontend)
- Check variable is set for all environments
- Redeploy after adding environment variables

**Database: Connection timeout on Vercel**

- Ensure NeonDB allows connections from Vercel IPs
- Check DATABASE_URL has `?sslmode=require`
- Verify connection pooling is enabled

---

## 📝 Available Scripts

### Backend

| Command             | Description                           |
| ------------------- | ------------------------------------- |
| `npm run dev`       | Start development server with nodemon |
| `npm start`         | Start production server               |
| `npm run db:setup`  | Generate Prisma Client & push schema  |
| `npm run db:seed`   | Seed database with demo data          |
| `npx prisma studio` | Open Prisma Studio (database GUI)     |

### Frontend

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start Vite dev server (port 5173) |
| `npm run build`   | Build for production              |
| `npm run preview` | Preview production build          |
| `npm run lint`    | Run ESLint for code quality       |

---

## 🎨 Design System

### Color Palette

```css
/* Primary Gradients */
Purple-Indigo: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
Pink-Red: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
Blue-Cyan: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)

/* Status Colors */
Success: #10b981 (Green)
Warning: #f59e0b (Amber)
Error: #ef4444 (Red)
Info: #3b82f6 (Blue)

/* Glass Morphism */
Background: rgba(255, 255, 255, 0.1)
Backdrop Filter: blur(10px)
Border: 1px solid rgba(255, 255, 255, 0.2)
```

### Key UI Components

- 🎴 **Glass Cards** - Frosted glass effect with backdrop blur and subtle borders
- 🔘 **Gradient Buttons** - Smooth hover animations with scale transforms
- ⭐ **Star Ratings** - Interactive star selection with hover preview
- 📝 **Enhanced Forms** - Icon-enhanced inputs with validation feedback
- 🎭 **Modal Dialogs** - Floating overlays with blur backdrop
- 📊 **Modern Tables** - Gradient headers with alternating row colors
- 🏷️ **Status Badges** - Color-coded role and status indicators
- 🎯 **Stat Cards** - Dashboard metrics with icons and gradients

---

## 🧪 Testing Guide

### 1. Admin Workflow

```
1. Login with admin credentials
2. View dashboard statistics (users, stores, ratings)
3. Navigate to "Add User" and create a new customer
4. Navigate to "Add Store" and create a new store
5. View "Users List" and filter by role
6. View "Stores List" and search by name
7. Verify all data displays correctly
```

### 2. Customer Workflow

```
1. Sign up as new user or login with customer credentials
2. View stores list with rating information
3. Select a store and submit a rating (1-5 stars)
4. Verify rating appears immediately
5. Update the rating to a different value
6. Confirm updated rating is saved
7. Browse other stores and their ratings
```

### 3. Store Owner Workflow

```
1. Login with store owner credentials
2. View store dashboard with statistics
3. Check average rating calculation
4. Review customer ratings table
5. Verify customer names and email addresses
6. Check rating timestamps
7. Monitor total ratings count
```

---

## 🌟 Key Highlights

✅ **Beautiful UI** - Glass-morphism design with animated gradients  
✅ **Secure Authentication** - JWT tokens with bcrypt hashing  
✅ **Role-Based Access** - Three distinct user roles with permissions  
✅ **Responsive Design** - Perfect on mobile, tablet, and desktop  
✅ **Fast Performance** - Optimized with Vite and efficient queries  
✅ **Type-Safe Database** - Prisma ORM with PostgreSQL  
✅ **Cloud-Hosted** - NeonDB for serverless PostgreSQL  
✅ **Production-Ready** - Deployed on Vercel with CI/CD  
✅ **Real-Time Updates** - Instant rating calculations  
✅ **Accessible** - WCAG compliant with keyboard navigation

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Development Guidelines

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add some amazing feature"
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Code Style

- Follow existing code structure and patterns
- Write meaningful commit messages
- Add comments for complex logic
- Test changes thoroughly (local + production)
- Update documentation if needed
- Follow ESLint rules for JavaScript/React code

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 👨‍💻 Author

**Developed for FullStack Intern Coding Challenge**

---

## 📞 Contact

**Your Name**

- 📧 Email: your.email@example.com
- 💼 LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- 🐙 GitHub: [@yourusername](https://github.com/yourusername)

---

## 🙏 Acknowledgments

Special thanks to:

- [React](https://reactjs.org/) - The amazing UI library
- [Vite](https://vitejs.dev/) - Lightning-fast build tool
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [NeonDB](https://neon.tech/) - Serverless PostgreSQL
- [Vercel](https://vercel.com/) - Deployment platform
- [Lucide](https://lucide.dev/) - Beautiful icon library

---

<div align="center">

### Made with ❤️ using Modern Web Technologies

**[⬆ Back to Top](#-store-rating-system---full-stack-application)**

</div>
