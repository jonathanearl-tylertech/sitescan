
CREATE TABLE IF NOT EXISTS users (
    user_id INTEGER PRIMARY KEY,
    username TEXT UNIQUE,
    email TEXT UNIQUE,
    sub: TEXT UNIQUE,
    authority TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);