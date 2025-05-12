// server.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.connect");
const passport = require("./middleware/passport.middleware");
 
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, '.env') });
console.log("Environment variables loaded successfully.");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

// Enable CORS for all routes

app.use(passport.initialize());
app.use(cors());
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express with CORS!" });
});

app.use("/api", require("./routes"));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
