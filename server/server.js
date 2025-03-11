const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const bcrypt = require('bcryptjs');

const app = express();
const port = 8080;

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({
    origin: 'http://localhost:5173', // Change this if frontend runs on another port
    credentials: true
}));
app.use(express.json());

// Database Connection
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "sentim",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Session handling
app.use(session({
    secret: "key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production', httpOnly: true }
}));

// Start Server
app.listen(port, () => {
    console.log("Listening on port 8080.");
});

// Login Route
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT * FROM user WHERE email = ?";
    db.query(sql, [email], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Error logging in" });
        }

        if (result.length === 0) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const user = result[0];

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Error comparing passwords" });
            }

            if (isMatch) {
                req.session.user = user;
                req.session.save(() => {
                    return res.json({ success: true, message: "Successfully logged in." });
                });
            } else {
                return res.status(401).json({ message: "Invalid credentials" });
            }
        });
    });
});

app.get('/before-midnight', (req, res)=> {
    const {type, setting, budget} = req.query
    
    let sql = "SELECT * FROM before_midnight WHERE 1=1"
    const params = []

    if (type) {
        sql += " AND type = ?"
        params.push(type)
    }
    if (setting) {
        sql += " AND setting = ?"
        params.push(setting)
    }
    if (budget) {
        sql += " AND budget_range = ?"
        params.push(budget)
    }

    sql += " ORDER BY RAND() LIMIT 1"

    db.query(sql, params, (err, results) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Database error" });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: "No matching activities found" });
        }

        res.json(results[0]); // Return the randomly selected activity
    });
})
