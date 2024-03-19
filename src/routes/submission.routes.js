import express from "express";
import { createSubmission, getSubmissions } from "../controllers/submission.controller.js";
import { createSubmissionValidation, redisCacheMiddleware } from "../middlewares/submission.middlewares.js";
const router = express.Router();

router.get("/", redisCacheMiddleware, getSubmissions);
router.post("/", createSubmissionValidation, createSubmission);

export default router;
