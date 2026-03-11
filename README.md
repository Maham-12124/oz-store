# 📱 MobileShop — Daraz-Like Mobile Store

A full-featured e-commerce platform for mobile phones built with **Next.js 14**, **PostgreSQL**, and **Prisma ORM**.

---

## ✨ Features

- 🏠 **Homepage** — Banner carousel, featured products, categories, new arrivals
- 🔍 **Product Listing** — Filter by category, brand, price range with pagination
- 📦 **Product Details** — Image gallery, variants, specs, reviews
- 🛒 **Shopping Cart** — Persistent cart using Zustand + localStorage
- 💳 **Checkout** — Delivery address, payment method selection (COD, EasyPaisa, etc.)
- 📋 **Orders** — Order history, tracking with status steps
- 👤 **Auth** — Register, login with NextAuth (JWT sessions)
- 🔐 **Admin Dashboard** — Stats, orders management
- 📱 **Responsive** — Mobile-first design

---

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS |
| Database | PostgreSQL |
| ORM | Prisma |
| Auth | NextAuth.js (Credentials) |
| State | Zustand (cart) |
| UI | Lucide React icons |
| Notifications | react-hot-toast |

---

## 📋 Prerequisites

Before starting, make sure you have:

- **Node.js** v18+ → https://nodejs.org
- **npm** v9+ (comes with Node.js)
- **PostgreSQL** v14+ → https://www.postgresql.org/download/
- A code editor (VS Code recommended)

---

## 🚀 Step-by-Step Setup Guide

### Step 1: Install Node.js

1. Go to https://nodejs.org
2. Download and install the **LTS version** (v18 or v20)
3. Verify installation:
```bash
node --version   # Should show v18.x.x or higher
npm --version    # Should show v9.x.x or higher
```

---

### Step 2: Install and Setup PostgreSQL

#### On Windows:
1. Download from https://www.postgresql.org/download/windows/
2. Run the installer — remember the **password** you set for `postgres` user
3. Open **pgAdmin** (installed with PostgreSQL) or use **psql** terminal

#### On macOS:
```bash
brew install postgresql@15
brew services start postgresql@15
```

#### On Linux (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

---

### Step 3: Create Database

Open your PostgreSQL terminal (psql or pgAdmin) and run:

```sql
-- Connect to PostgreSQL
psql -U postgres

-- Create the database
CREATE DATABASE mobile_shop;

-- Verify it was created
\l

-- Exit
\q
```

Or in pgAdmin: Right-click "Databases" → Create → Database → Name: `mobile_shop`

---

### Step 4: Get the Project

Clone or download this project to your computer:

```bash
# If using git:
git clone <your-repo-url> mobile-shop
cd mobile-shop

# Or extract the downloaded zip and navigate to it:
cd path/to/mobile-shop
```

---

### Step 5: Install Dependencies

```bash
npm install
```

This installs all required packages (Next.js, Prisma, NextAuth, etc.)

---

### Step 6: Configure Environment Variables

Copy the example environment file:

```bash
# Windows:
copy .env.example .env

# macOS/Linux:
cp .env.example .env
```

Open `.env` in your editor and update the values:

```env
# Replace with your PostgreSQL credentials:
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/mobile_shop"

# NextAuth configuration
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="any-random-secret-string-here-change-in-production"

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_APP_NAME="MobileShop"
```

> 💡 **DATABASE_URL format:**
> `postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE_NAME`
> - Default PostgreSQL username: `postgres`
> - Default port: `5432`
> - Replace `YOUR_PASSWORD` with the password you set during PostgreSQL installation

---

### Step 7: Run Database Migrations

This creates all the tables in your database:

```bash
npx prisma migrate dev --name init
```

You should see output like:
```
✔ Generated Prisma Client
✔ Applied 1 migration(s)
```

---

### Step 8: Generate Prisma Client

```bash
npx prisma generate
```

---

### Step 9: Seed the Database

This adds sample data (products, categories, admin user):

```bash
npm run db:seed
```

Expected output:
```
🌱 Seeding database...
✅ Seeding complete!
👤 Admin: admin@mobileshop.com / admin123
👤 User: user@test.com / user123
```

---

### Step 10: Start the Development Server

```bash
npm run dev
```

Open your browser and go to: **http://localhost:3000** 🎉

---

## 👤 Test Accounts

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@mobileshop.com | admin123 |
| User | user@test.com | user123 |

---

## 📁 Project Structure

```
mobile-shop/
├── prisma/
│   ├── schema.prisma      # Database schema (all models)
│   └── seed.js            # Sample data seeder
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── page.tsx       # Homepage
│   │   ├── shop/          # Product listing & detail
│   │   │   ├── page.tsx   # Shop listing with filters
│   │   │   └── [slug]/    # Product detail page
│   │   ├── cart/          # Shopping cart
│   │   ├── checkout/      # Checkout flow
│   │   ├── orders/        # Order history
│   │   ├── auth/          # Login & Register
│   │   ├── admin/         # Admin dashboard
│   │   └── api/           # REST API routes
│   │       ├── auth/      # NextAuth + Register
│   │       ├── products/  # Products API
│   │       └── orders/    # Orders API
│   ├── components/
│   │   ├── layout/        # Header, Footer, Providers
│   │   └── shop/          # ProductCard, BannerCarousel
│   └── lib/
│       ├── prisma.ts      # Prisma client singleton
│       ├── auth.ts        # NextAuth configuration
│       ├── store.ts       # Zustand cart store
│       └── utils.ts       # Helper functions
├── .env                   # Environment variables (create from .env.example)
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Dependencies & scripts
```

---

## 🗄 Database Schema Overview

```
User ──────────────────────────────────
  id, name, email, password, role
  ↓
  ├── Address (delivery addresses)
  ├── Order ──► OrderItem ──► Product
  ├── Review ──► Product  
  └── Cart ──► CartItem ──► Product

Product ───────────────────────────────
  id, name, slug, price, salePrice
  images[], stock, rating, sold
  ↓
  ├── Category (smartphones, tablets...)
  ├── Brand (Apple, Samsung...)
  ├── ProductVariant (colors, storage)
  └── Review[]

Order ─────────────────────────────────
  orderNumber, status, paymentStatus
  subtotal, shippingFee, total
  ↓
  ├── Address (snapshot of delivery)
  └── OrderItem[]

Banner ────────────────────────────────
  title, image, link, isActive, order
```

---

## 📜 Available Scripts

```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

npm run db:migrate   # Run pending database migrations
npm run db:generate  # Regenerate Prisma client
npm run db:seed      # Seed sample data
npm run db:studio    # Open Prisma Studio (visual DB browser)
```

---

## 🔧 Common Issues & Fixes

### ❌ "Can't reach database server"
**Fix:** Check your `DATABASE_URL` in `.env` and ensure PostgreSQL is running:
```bash
# Windows
net start postgresql-x64-15

# macOS
brew services start postgresql@15

# Linux
sudo systemctl start postgresql
```

### ❌ "prisma: command not found"
**Fix:** Use npx prefix:
```bash
npx prisma migrate dev
npx prisma generate
```

### ❌ "Module not found" errors
**Fix:** Re-install dependencies:
```bash
rm -rf node_modules
npm install
```

### ❌ "NEXTAUTH_SECRET is not set"
**Fix:** Make sure your `.env` file has `NEXTAUTH_SECRET="any-string-here"` and restart the dev server.

### ❌ Images not loading
**Fix:** The project uses Unsplash images. Check your internet connection or update `next.config.js` to add other image domains.

---

## 🚀 Production Deployment

### Deploy on Vercel (Recommended):
1. Push your code to GitHub
2. Connect to Vercel at https://vercel.com
3. Add environment variables in Vercel dashboard
4. Use a managed PostgreSQL (Neon, Supabase, or Railway)
5. Run `npx prisma migrate deploy` for production migrations

### Environment for Production:
```env
DATABASE_URL="postgresql://..."     # Your production DB URL
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="very-long-random-secret-string"
```

---

## 🧩 Extending the Project

### Add a new product category:
1. Open Prisma Studio: `npm run db:studio`
2. Navigate to `Category` table → Add record

### Add admin product management:
Create `/src/app/admin/products/page.tsx` with CRUD operations using the existing Prisma schema.

### Add payment integration (Stripe):
```bash
npm install stripe @stripe/stripe-js
```
Then update the checkout page to use Stripe Elements.

---

## 📝 License

MIT — Free for personal and commercial use.
