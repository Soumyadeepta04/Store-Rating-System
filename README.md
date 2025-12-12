# 🏪 RateMaster - Store Rating System

A stunning, modern full-stack web application that enables users to rate and review stores. Built with cutting-edge technologies and featuring a beautiful glass-morphism UI design with role-based access control for System Administrators, Customers, and Store Owners.

## ✨ Current Status
- **Backend**: Running on http://localhost:5000 ✅
- **Frontend**: Running on http://localhost:5173 ✅
- **Database**: Connected and seeded with demo data ✅
- **UI**: Modern glass-morphism design with animations ✅
- **All Dependencies**: Installed and configured ✅

---

## 🎨 UI/UX Highlights

### **Modern Design System**
- ✨ **Glass-morphism Effects** - Frosted glass cards with backdrop blur
- 🌈 **Gradient Backgrounds** - Animated floating blob gradients
- 🎭 **Smooth Animations** - Hover effects, transitions, and micro-interactions
- 📱 **Fully Responsive** - Perfect on desktop, tablet, and mobile
- 🎯 **No Scrolling Login** - Compact design that fits on one screen
- 🔮 **Interactive Elements** - Enhanced buttons, inputs, and cards
- 💫 **Loading States** - Beautiful animated spinners with icons
- 🎪 **Modern Icons** - SVG icons throughout the interface

### **Page-Specific Features**

**Login & Signup Pages:**
- Animated gradient backgrounds with floating blobs
- Glass-effect cards with modern styling
- Icon-enhanced input fields
- Collapsible demo credentials
- Gradient buttons with hover animations

**Admin Dashboard:**
- Premium stat cards with gradient icons
- Animated loading states
- Quick action buttons with gradients
- Modern card hover effects

**User Dashboard (Stores):**
- Beautiful store cards with glass effects
- Interactive star ratings with hover
- Modern search filters with icons
- Floating rating dialog modal
- Status badges for rated stores

**Store Owner Dashboard:**
- Professional information cards
- Large rating display with gradients
- Modern table with customer avatars
- Enhanced statistics visualization

---

## 📸 Screenshots

<!-- Add your updated screenshots here -->
### Normal User Dashboard: 
<img width="1919" height="969" alt="image" src="https://github.com/user-attachments/assets/2652e7b8-2b79-419b-85df-1c1e4a0aa2d8" />

### Store Dashboard: 
<img width="1919" height="975" alt="image" src="https://github.com/user-attachments/assets/ed7575a2-0476-4dd2-91cf-f5abe8921d6d" />

### Admin Dashboard: 
<img width="1919" height="969" alt="image" src="https://github.com/user-attachments/assets/84266da3-b43c-4df6-9548-3d92aaac2f0c" />

---

## 🚀 Features

### 🔐 **Authentication & Authorization**
- Single unified login system for all user roles
- Role-based access control (RBAC)
- Secure JWT-based authentication
- Password update functionality for all users
- Beautiful login/signup pages with no scrolling required

### 👑 **System Administrator**
- **Dashboard Analytics**
  - Total number of users
  - Total number of stores
  - Total number of submitted ratings
  - Modern stat cards with gradient icons
- **User Management**
  - Add new admin users and normal users
  - View all users with filtering capabilities
  - Filter by: Name, Email, Address, Role
  - View store owner ratings alongside user details
- **Store Management**
  - Add new stores with store owner accounts
  - View all stores with ratings
  - Filter stores by: Name, Email, Address
  - Sortable tables (ascending/descending)

### 👤 **Normal User (Customer)**
- **Account Management**
  - Self-registration through beautiful signup page
  - Update password after login
- **Store Discovery**
  - View all registered stores in modern card layout
  - Search stores by Name and Address with icon-enhanced filters
  - See detailed store information with ratings
- **Rating System**
  - Submit ratings (1-5 stars) for stores
  - Modify previously submitted ratings
  - View personal rating alongside overall store rating
  - Interactive star rating interface with hover effects
  - Beautiful modal dialog for rating submission

### 🏬 **Store Owner**
- **Store Dashboard**
  - View average store rating with large display
  - See total number of ratings received
  - Professional information cards with icons
- **Customer Insights**
  - View list of all users who rated the store
  - See individual ratings with timestamps
  - User details (Name, Email) for each rating
  - Modern table with customer avatars

### ✨ **Additional Features**
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Loading States** - Professional animated loaders for all async operations
- **Form Validations** - Client-side and server-side validation with error icons
- **Error Handling** - User-friendly error messages with styled alerts
- **Sortable Tables** - Click column headers to sort
- **Filter System** - Real-time filtering on all list pages
- **Back Navigation** - Easy navigation with back buttons
- **Modern UI/UX** - Glass-morphism design with Tailwind CSS
- **Smooth Animations** - Transitions, hover effects, and micro-interactions
- **Empty States** - Beautiful illustrations for no results

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework:** React.js 19.2.0
- **Routing:** React Router DOM 7.9.6
- **Styling:** Tailwind CSS 3.4.1 (with custom animations)
- **HTTP Client:** Axios 1.13.2
- **Build Tool:** Vite 7.2.4
- **Design:** Glass-morphism, Gradients, Animations

### **Backend**
- **Framework:** Express.js 5.2.1
- **Database ORM:** Prisma 5.22.0
- **Database:** PostgreSQL (Neon)
- **Authentication:** JWT (jsonwebtoken 9.0.2)
- **Password Hashing:** bcryptjs 2.4.3
- **CORS:** cors 2.8.5

### **Development Tools**
- **Node.js** (v18+ recommended)
- **npm** or **yarn**
- **Nodemon** for development

---

## 📁 Project Structure

```
RoxillerSystems/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma          # Database schema definition
│   │   └── seed.js                # Database seeding script
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js              # Database configuration
│   │   ├── controllers/
│   │   │   ├── adminController.js # Admin functionality
│   │   │   ├── authController.js  # Authentication logic
│   │   │   ├── storeController.js # Store owner functionality
│   │   │   └── userController.js  # User functionality
│   │   ├── middleware/
│   │   │   └── authMiddleware.js  # JWT authentication middleware
│   │   ├── routes/
│   │   │   ├── adminRoutes.js     # Admin API routes
│   │   │   ├── authRoutes.js      # Auth API routes
│   │   │   ├── storeRoutes.js     # Store API routes
│   │   │   └── userRoutes.js      # User API routes
│   │   ├── utils/
│   │   │   └── validation.js      # Server-side validation
│   │   └── server.js              # Express app entry point
│   ├── .env                       # Environment variables
│   └── package.json               # Backend dependencies
│
├── frontend/
│   ├── public/                    # Static assets
│   ├── src/
│   │   ├── assets/                # Images, icons
│   │   ├── components/
│   │   │   ├── Navbar.jsx         # Modern navigation bar
│   │   │   └── PrivateRoute.jsx   # Protected route wrapper
│   │   ├── context/
│   │   │   └── AuthContext.jsx    # Authentication context
│   │   ├── pages/
│   │   │   ├── admin/
│   │   │   │   ├── AdminDashboard.jsx  # Modern admin dashboard
│   │   │   │   ├── AddStore.jsx
│   │   │   │   ├── AddUser.jsx
│   │   │   │   ├── StoresList.jsx
│   │   │   │   └── UsersList.jsx
│   │   │   ├── store/
│   │   │   │   └── StoreDashboard.jsx  # Store owner dashboard
│   │   │   ├── user/
│   │   │   │   └── UserStores.jsx      # User stores page
│   │   │   ├── Login.jsx               # Beautiful login page
│   │   │   ├── Signup.jsx              # Modern signup page
│   │   │   └── UpdatePassword.jsx
│   │   ├── utils/
│   │   │   ├── api.js             # Axios configuration
│   │   │   └── validation.js      # Client-side validation
│   │   ├── App.jsx                # Main app component
│   │   ├── main.jsx               # React entry point
│   │   └── index.css              # Global styles with custom CSS
│   ├── .env                       # Frontend environment variables
│   ├── index.html                 # HTML template
│   ├── tailwind.config.js         # Tailwind with custom animations
│   ├── vite.config.js             # Vite configuration
│   └── package.json               # Frontend dependencies
│
├── .gitignore                     # Git ignore rules
└── README.md                      # Project documentation
```

---

## ⚙️ Installation & Setup

### **Prerequisites**
- Node.js (v18 or higher)
- PostgreSQL database (or Neon account)
- npm or yarn package manager

### **1. Clone the Repository**
```bash
git clone <repository-url>
cd RoxillerSystems
```

### **2. Backend Setup**

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Configure environment variables
# Create a .env file with the following:
DATABASE_URL="your_postgresql_connection_string"
JWT_SECRET="your_jwt_secret_key"
PORT=5000
NODE_ENV=development

# Setup database (generate, push schema, and seed data)
npm run db:setup

# OR run commands individually:
npm run db:generate  # Generate Prisma Client
npm run db:push      # Push schema to database
npm run db:seed      # Seed sample data

# Start the backend server
npm run dev
```

The backend server will start on `http://localhost:5000`

### **3. Frontend Setup**

Open a new terminal:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file (optional - defaults to localhost:5000)
echo "VITE_API_URL=http://localhost:5000/api" > .env

# Start the development server
npm run dev
```

The frontend application will start on `http://localhost:5173`

### **4. Access the Application**

Open your browser and navigate to:
```
http://localhost:5173
```

---

## 🔑 Demo Login Credentials

After seeding the database, use these credentials to test different roles:

### 👑 **Administrator**
```
Name: Sophia Anderson
Email: sophia.anderson@ratemaster.com
Password: SuperAdmin@2024
```

### 🏪 **Store Owners**

**1. Luxury Emporium**
```
Owner: Michael Chen
Email: michael.chen@luxuryemporium.com
Password: Luxury@2024
Location: Beverly Hills, CA
```

**2. Green Market Organics**
```
Owner: Emma Rodriguez
Email: emma.rodriguez@greenmarket.com
Password: Organic@2024
Location: San Francisco, CA
```

**3. Artisan Coffee House**
```
Owner: David Kim
Email: david.kim@artisancafe.com
Password: Coffee@2024
Location: Seattle, WA
```

### 👤 **Customers**

**1. Olivia Martinez**
```
Email: olivia.martinez@gmail.com
Password: Welcome@123
Location: Miami Beach, FL
```

**2. James Wilson**
```
Email: james.wilson@outlook.com
Password: Welcome@456
Location: Chicago, IL
```

---

## 📋 Form Validation Rules

### **Name**
- Minimum: 20 characters
- Maximum: 60 characters
- Example: `John Doe Customer Account`

### **Email**
- Must follow standard email format
- Example: `user@example.com`

### **Password**
- Length: 8-16 characters
- Must contain at least one uppercase letter
- Must contain at least one special character
- Example: `Password@123`

### **Address**
- Maximum: 400 characters
- Example: `123 Main Street, City, State, ZIP`

---

## 🗄️ Database Schema

### **User Model**
```prisma
model User {
  id        String   @id @default(uuid())
  name      String
  email     String   @unique
  password  String   (Hashed with bcrypt)
  address   String
  role      UserRole @default(USER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  store     Store?
  ratings   Rating[]
}

enum UserRole {
  ADMIN
  USER
  STORE_OWNER
}
```

### **Store Model**
```prisma
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
```

### **Rating Model**
```prisma
model Rating {
  id        String   @id @default(uuid())
  rating    Int      (1-5)
  userId    String
  storeId   String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  user      User     @relation(fields: [userId], references: [id])
  store     Store    @relation(fields: [storeId], references: [id])
  
  @@unique([userId, storeId])
}
```

---

## 🎨 Design Features

### **Visual Design**
- ✨ **Glass-morphism UI** - Frosted glass effects with backdrop blur
- 🌈 **Gradient Backgrounds** - Animated floating blob gradients
- 🎭 **Smooth Animations** - Hover effects, transitions, and micro-interactions
- 💫 **Custom Animations** - Blob, float, and shimmer keyframe animations
- 🎯 **Modern Icons** - SVG icons throughout the interface
- 🔮 **Interactive Elements** - Enhanced buttons, inputs, and cards

### **User Experience**
- 📱 **Fully Responsive** - Perfect on all screen sizes
- 🎪 **Loading States** - Beautiful animated spinners
- 🚨 **Error Handling** - Styled error messages with icons
- ✅ **Form Validation** - Real-time validation with visual feedback
- 🎨 **Empty States** - Beautiful illustrations for no results
- 🔄 **Smooth Transitions** - Page transitions and element animations

### **Component Features**
- 🌟 **Interactive Star Ratings** - Hover effects and animations
- 🃏 **Modern Cards** - Glass-effect cards with hover states
- 🔘 **Gradient Buttons** - Beautiful gradient buttons with shadows
- 📝 **Enhanced Forms** - Icon-enhanced input fields
- 📊 **Modern Tables** - Gradient headers with hover effects
- 🎭 **Modal Dialogs** - Floating modals with backdrop blur

---

## 🔒 Security Features

- 🔐 **Password Hashing** - Using bcryptjs with salt rounds
- 🎫 **JWT Authentication** - Secure token-based sessions (7-day expiry)
- 👮 **Role-Based Access Control** - RBAC for all routes
- 🛡️ **Protected API Routes** - Middleware authentication
- ✅ **Input Validation** - Both client-side and server-side
- 🚫 **SQL Injection Prevention** - Via Prisma ORM
- 🌐 **CORS Configuration** - Configured for cross-origin requests
- 🔄 **Auto Token Refresh** - Axios interceptors for token management

---

## 🧪 Testing the Application

### **1. Start Both Servers**
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### **2. Access the Application**
Open your browser and navigate to: `http://localhost:5173`

### **3. Test Admin Features**
- Login with admin credentials
- View dashboard statistics with modern UI
- Add new users and stores
- Apply filters and sorting
- Manage users and stores

### **4. Test Customer Features**
- Sign up as a new user or login with test credentials
- Browse stores in beautiful card layout
- Search and filter stores
- Submit and modify ratings with interactive stars
- View your ratings alongside store averages

### **5. Test Store Owner Features**
- Login with store owner credentials
- View store dashboard with professional design
- See average rating and total ratings
- View customer ratings in modern table
- Monitor customer feedback

---

## 🚀 Deployment

### **Backend (Vercel)**
The backend is configured for Vercel deployment with `vercel.json`:
```bash
cd backend
vercel deploy
```

### **Frontend (Vercel)**
The frontend is also configured for Vercel:
```bash
cd frontend
vercel deploy
```

### **Database**
Using Neon PostgreSQL (serverless PostgreSQL):
- Already configured in `.env`
- Automatic connection pooling
- Serverless-friendly

---

## 📝 Available Scripts

### **Backend**
```bash
npm run dev          # Start development server with nodemon
npm start            # Start production server
npm run db:generate  # Generate Prisma Client
npm run db:push      # Push schema to database
npm run db:seed      # Seed database with demo data
npm run db:setup     # Complete database setup (generate + push + seed)
```

### **Frontend**
```bash
npm run dev      # Start Vite development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 🎯 Key Improvements

### **UI/UX Enhancements**
✅ No scrolling required on login/signup pages
✅ Glass-morphism design throughout
✅ Animated gradient backgrounds
✅ Interactive star ratings with hover effects
✅ Modern loading states with icons
✅ Enhanced error messages with styling
✅ Collapsible demo credentials on login
✅ Beautiful modal dialogs
✅ Smooth page transitions

### **Performance**
✅ Optimized bundle size with Vite
✅ Lazy loading for routes
✅ Efficient state management
✅ Optimized database queries with Prisma
✅ Connection pooling for database

### **Developer Experience**
✅ Hot module replacement (HMR)
✅ TypeScript-ready structure
✅ ESLint configuration
✅ Organized file structure
✅ Reusable components
✅ Custom Tailwind utilities

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

This project is licensed under the ISC License.

---

## 👨‍💻 Author

Developed as part of the FullStack Intern Coding Challenge

---

## 🙏 Acknowledgments

- React.js for the amazing frontend framework
- Tailwind CSS for the utility-first CSS framework
- Prisma for the excellent ORM
- Vite for the blazing-fast build tool
- Neon for serverless PostgreSQL

---

**Made with ❤️ and modern web technologies**
