import "dotenv/config";
import express from "express";
import cors from "cors";
import submissionRoutes from "./routes/submission.routes.js";
import {errorHandler} from "./utils/ErrorHandler.js";

import {connectDB} from "./config/db.js";
import {redisSetUp} from "./config/redis.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
connectDB();

app.use("/api/v1/submissions", submissionRoutes);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});