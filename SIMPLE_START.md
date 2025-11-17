# Simple Login System - Start Guide

## What You Have

**Backend:**
- SQLite database with `users` table (id, email, password_hash)
- `/login` endpoint that checks password and returns `{ success: true/false }`
- Sample user: `user@example.com` / `password123`

**Frontend:**
- Simple login page with email + password
- Dashboard page (just says "Welcome!")
- localStorage to store user ID

---

## Start It

### Terminal 1: Backend

```bash
cd backend
npm install
node server.js
```

Expected output:
```
✅ Server running on http://localhost:5000
✅ Sample user created: user@example.com / password123
```

### Terminal 2: Frontend

```bash
cd frontend
npm install
npm start
```

Expected output:
```
Compiled successfully!
You can now view the app in the browser
```

---

## Test It

1. Go to **http://localhost:3000**
2. See login form
3. Enter:
   - Email: `user@example.com`
   - Password: `password123`
4. Click **Login**
5. See dashboard with "Welcome!" message
6. Click **Logout** to go back to login

---

## That's It!

Your complete login system:
- ✅ SQLite database
- ✅ Password validation with bcrypt
- ✅ Simple login/logout flow
- ✅ localStorage session

**Files:**
- Backend: `backend/server.js` and `backend/db.js`
- Frontend: `frontend/src/App.js`, `frontend/src/pages/Login.jsx`, `frontend/src/pages/Dashboard.jsx`

Done! 🎉
