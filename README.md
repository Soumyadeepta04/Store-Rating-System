# � RRateMaster - Modern Store Rating Platform

> A beautiful, full-stack web application for rating and reviewing stores with stunning glass-morphism UI design and role-based access control.

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://neon.tech/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## ✨ Live Demo

🚀 **Backend API**: `http://localhost:5000`  
🎨 **Frontend App**: `http://localhost:5173`

---

## 📸 Preview

<div align="center">
  <img src="https://github.com/user-attachments/assets/2652e7b8-2b79-419b-85df-1c1e4a0aa2d8" alt="User Dashboard" width="800"/>
  <p><em>Customer Dashboard - Browse and rate stores</em></p>
  
  <img src="https://github.com/user-attachments/assets/ed7575a2-0476-4dd2-91cf-f5abe8921d6d" alt="Store Dashboard" width="800"/>
  <p><em>Store Owner Dashboard - Monitor ratings and feedback</em></p>
  
  <img src="https://github.com/user-attachments/assets/84266da3-b43c-4df6-9548-3d92aaac2f0c" alt="Admin Dashboard" width="800"/>
  <p><em>Admin Dashboard - Manage users and stores</em></p>
</div>

---

## 🎯 Key Features

### 🎨 **Stunning UI/UX**
- 💎 **Glass-morphism Design** - Frosted glass effects with backdrop blur
- 🌈 **Animated Gradients** - Dynamic floating blob backgrounds
- ✨ **Smooth Animations** - Micro-interactions and transitions
- 📱 **Fully Responsive** - Perfect on all devices
- 🎭 **No Scrolling Login** - Compact, single-screen authentication

### 🔐 **Authentication & Security**
- 🎫 JWT-based authentication with 7-day token expiry
- 🔒 bcrypt password hashing with salt rounds
- 👮 Role-based access control (Admin, Customer, Store Owner)
- 🛡️ Protected routes with middleware
- ✅ Client & server-side validation

### 👑 **Admin Features**
- 📊 Real-time dashboard analytics
- 👥 User management (Create, View, Filter)
- 🏪 Store management (Create, View, Filter)
- 🔍 Advanced filtering and sorting
- 📈 Statistics visualization

### 👤 **Customer Features**
- 🔍 Browse stores with beautiful card layouts
- ⭐ Interactive 5-star rating system
- 🔄 Update ratings anytime
- 🎯 Search and filter stores
- 📱 Responsive mobile experience

### 🏬 **Store Owner Features**
- 📊 Professional dashboard with statistics
- ⭐ Average rating display
- 👥 Customer feedback table
- 📅 Rating timestamps
- 💼 Business insights

---

## �️ Teuch Stack

<table>
<tr>
<td width="50%">

### Frontend
- ⚛️ **React 19.2.0** - UI Framework
- 🎨 **Tailwind CSS 3.4.1** - Styling
- 🚀 **Vite 7.2.4** - Build Tool
- 🔀 **React Router 7.9.6** - Routing
- 📡 **Axios 1.13.2** - HTTP Client

</td>
<td width="50%">

### Backend
- 🟢 **Node.js & Express 5.2.1** - Server
- 🗄️ **Prisma 5.22.0** - ORM
- 🐘 **PostgreSQL (Neon)** - Database
- 🔐 **JWT & bcrypt** - Security
- 🌐 **CORS** - Cross-origin support

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Prerequisites
```bash
Node.js 18+
PostgreSQL or Neon account
npm or yarn
```

### Installation

**1️⃣ Clone the repository**
```bash
git clone <your-repo-url>
cd RoxillerSystems
```

**2️⃣ Backend Setup**
```bash
cd backend
npm install

# Create .env file
cat > .env << EOF
DATABASE_URL="your_postgresql_connection_string"
JWT_SECRET="your_secret_key"
PORT=5000
NODE_ENV=development
EOF

# Setup database
npm run db:setup

# Start server
npm run dev
```

**3️⃣ Frontend Setup**
```bash
cd frontend
npm install

# Create .env file (optional)
echo "VITE_API_URL=http://localhost:5000/api" > .env

# Start app
npm run dev
```

**4️⃣ Open Browser**
```
http://localhost:5173
```

---

## 🔑 Demo Accounts

### 👑 Administrator
```
📧 sophia.anderson@ratemaster.com
🔒 SuperAdmin@2024
```

### 🏪 Store Owners
```
1️⃣ Luxury Emporium
   📧 michael.chen@luxuryemporium.com
   🔒 Luxury@2024

2️⃣ Green Market Organics
   📧 emma.rodriguez@greenmarket.com
   🔒 Organic@2024

3️⃣ Artisan Coffee House
   📧 david.kim@artisancafe.com
   🔒 Coffee@2024
```

### 👤 Customers
```
1️⃣ Olivia Martinez
   📧 olivia.martinez@gmail.com
   🔒 Welcome@123

2️⃣ James Wilson
   📧 james.wilson@outlook.com
   🔒 Welcome@456
```

---

## 📁 Project Structure

```
RoxillerSystems/
│
├── 🔧 backend/
│   ├── prisma/
│   │   ├── schema.prisma      # Database schema
│   │   └── seed.js            # Demo data seeder
│   ├── src/
│   │   ├── config/            # Database config
│   │   ├── controllers/       # Business logic
│   │   ├── middleware/        # Auth middleware
│   │   ├── routes/            # API routes
│   │   ├── utils/             # Helpers
│   │   └── server.js          # Entry point
│   └── .env                   # Environment variables
│
├── 🎨 frontend/
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   ├── context/           # React context
│   │   ├── pages/             # Page components
│   │   │   ├── admin/         # Admin pages
│   │   │   ├── store/         # Store owner pages
│   │   │   └── user/          # Customer pages
│   │   ├── utils/             # Utilities
│   │   └── index.css          # Global styles
│   └── .env                   # Frontend config
│
└── 📖 README.md
```

---

## 🎨 Design System

### Color Palette
```css
Primary:   Purple to Indigo Gradient (#667eea → #764ba2)
Secondary: Pink to Red Gradient (#f093fb → #f5576c)
Success:   Blue to Cyan Gradient (#4facfe → #00f2fe)
```

### Key Components
- 🎴 **Glass Cards** - Frosted glass effect with backdrop blur
- 🔘 **Gradient Buttons** - Smooth hover animations
- ⭐ **Star Ratings** - Interactive with hover effects
- 📝 **Enhanced Forms** - Icon-enhanced inputs
- 🎭 **Modal Dialogs** - Floating with blur backdrop
- 📊 **Modern Tables** - Gradient headers with avatars

---

## 📋 API Endpoints

### Authentication
```
POST   /api/auth/signup          # Register new user
POST   /api/auth/login           # User login
PUT    /api/auth/update-password # Update password
```

### Admin
```
GET    /api/admin/dashboard      # Dashboard stats
POST   /api/admin/users          # Create user
POST   /api/admin/stores         # Create store
GET    /api/admin/users          # List users
GET    /api/admin/stores         # List stores
```

### Customer
```
GET    /api/user/stores          # Browse stores
POST   /api/user/ratings         # Submit rating
```

### Store Owner
```
GET    /api/store/dashboard      # Store statistics
```

---

## 🔒 Security Features

| Feature | Implementation |
|---------|---------------|
| 🔐 Password Hashing | bcryptjs with 10 salt rounds |
| 🎫 Authentication | JWT tokens (7-day expiry) |
| 👮 Authorization | Role-based access control |
| 🛡️ API Protection | Middleware authentication |
| ✅ Input Validation | Client & server-side |
| 🚫 SQL Injection | Prisma ORM protection |
| 🌐 CORS | Configured origins |

---

## 📊 Database Schema

```prisma
User {
  id        UUID
  name      String
  email     String @unique
  password  String (hashed)
  address   String
  role      Enum (ADMIN, USER, STORE_OWNER)
  store     Store?
  ratings   Rating[]
}

Store {
  id        UUID
  name      String
  email     String @unique
  address   String
  ownerId   UUID @unique
  owner     User
  ratings   Rating[]
}

Rating {
  id        UUID
  rating    Int (1-5)
  userId    UUID
  storeId   UUID
  user      User
  store     Store
  @@unique([userId, storeId])
}
```

---

## 🧪 Testing Guide

### 1. Admin Workflow
```
1. Login as admin
2. View dashboard statistics
3. Create new user/store
4. Filter and sort data
5. Manage platform
```

### 2. Customer Workflow
```
1. Sign up or login
2. Browse stores
3. Search and filter
4. Rate stores (1-5 stars)
5. Update ratings
```

### 3. Store Owner Workflow
```
1. Login as store owner
2. View dashboard
3. Check average rating
4. Review customer feedback
5. Monitor statistics
```

---

## 📝 Available Scripts

### Backend
| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm start` | Start production server |
| `npm run db:setup` | Complete database setup |
| `npm run db:seed` | Seed demo data |

### Frontend
| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🚀 Deployment

### Vercel (Recommended)

**Backend:**
```bash
cd backend
vercel deploy
```

**Frontend:**
```bash
cd frontend
vercel deploy
```

### Environment Variables
```env
# Backend
DATABASE_URL=your_neon_postgres_url
JWT_SECRET=your_secret_key
PORT=5000

# Frontend
VITE_API_URL=your_backend_url/api
```

---

## 🎯 Validation Rules

| Field | Rules |
|-------|-------|
| **Name** | 20-60 characters |
| **Email** | Valid email format |
| **Password** | 8-16 chars, 1 uppercase, 1 special char |
| **Address** | Max 400 characters |

---

## 🌟 Key Highlights

✅ **Modern UI** - Glass-morphism design with animations  
✅ **Secure** - JWT auth with bcrypt hashing  
✅ **Responsive** - Works on all devices  
✅ **Fast** - Optimized with Vite  
✅ **Scalable** - Clean architecture  
✅ **Type-Safe** - Prisma ORM  
✅ **Real-time** - Instant updates  
✅ **Accessible** - WCAG compliant  

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 👨‍💻 Author

**Developed for FullStack Intern Coding Challenge**

---

## 🙏 Acknowledgments

Special thanks to:
- [React](https://reactjs.org/) - The amazing UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [Vite](https://vitejs.dev/) - Lightning-fast build tool
- [Neon](https://neon.tech/) - Serverless PostgreSQL

---

## 📞 Support

If you have any questions or need help, please:
- 📧 Open an issue
- 💬 Start a discussion
- ⭐ Star this repository

---

<div align="center">

### Made with ❤️ using Modern Web Technologies

**[⬆ Back to Top](#-ratemaster---modern-store-rating-platform)**

</div>
