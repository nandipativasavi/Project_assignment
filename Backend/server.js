const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user.routes');
const authMiddleware = require('./middleware/auth.middleware');
const adminMiddleware = require('./middleware/admin.middleware');
const cors = require('cors');

const app = express();

// ================= CONNECT DATABASE =================
connectDB();

// ================= MIDDLEWARE =================
app.use(express.json());

//=================cors=======================

app.use(cors());

// ================= API ROUTES =================

// user authentication routes
app.use('/api/users', userRoutes);

// test routes
app.get('/', (req, res) => {
  res.send('Server is running 🚀');
});

app.get('/about', (req, res) => {
  res.send('This is my about page');
});

// ================= PROTECTED ROUTE =================
app.get('/api/dashboard', authMiddleware, adminMiddleware, (req, res) => {
  console.log('Dashboard route hit ✅');
  res.status(200).json({
    message: 'Welcome to Admin Dashboard 🚀',
    user: req.user
  });
});
// ================= START SERVER =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});