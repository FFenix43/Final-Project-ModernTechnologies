const Database = require('better-sqlite3');
const path = require('path');
const bcrypt = require('bcryptjs');

const dbPath = path.join(__dirname, 'users.db');
const db = new Database(dbPath);

// Create users table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL
  )
`);

// Initialize with sample user
const existing = db.prepare('SELECT COUNT(*) as count FROM users').get();
if (existing.count === 0) {
  const hashedPassword = bcrypt.hashSync('password123', 10);
  db.prepare('INSERT INTO users (email, password_hash) VALUES (?, ?)').run('user@example.com', hashedPassword);
  console.log('✅ Sample user created: user@example.com / password123');
}

module.exports = db;
