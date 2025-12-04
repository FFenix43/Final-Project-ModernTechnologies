const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const db = require('./db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ success: false });
  }

  const user = db.prepare('SELECT id, email, password_hash FROM users WHERE email = ?').get(email);

  if (!user) {
    return res.json({ success: false });
  }

  const isPasswordValid = bcrypt.compareSync(password, user.password_hash);

  if (isPasswordValid) {
    return res.json({ success: true, userId: user.id });
  } else {
    return res.json({ success: false });
  }
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
