import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import submissionRoutes from "./routes/submission.routes.js";
import { errorHandler } from "./utils/ErrorHandler.js";

import { connectDB } from "./config/db.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();

const __dirname = path.resolve();

app.use("/api/v1/submissions", submissionRoutes);
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
