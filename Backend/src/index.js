import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import applyRoutes from "./routes/apply.js";
import hireRoutes from "./routes/hire.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
    res.send("API is running..........");
});

// Apply routes
app.use("/api", applyRoutes);

// Hire routes
app.use("/api", hireRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
