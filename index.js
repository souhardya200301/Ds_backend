// server.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.connect");
const { json } = require("express");

const app = express();
const PORT = 3000;

connectDB();

// Enable CORS for all routes
app.use(cors());
app.use(json());

// Sample route
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express with CORS!" });
});

app.use("/api", require("./routes"));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
