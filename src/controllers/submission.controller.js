import { Submission } from "../models/submission.model.js";
import { AppError } from "../utils/AppError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { client } from "../config/redis.js";

export const getSubmissions = async (req, res, next) => {
    try {
        const submissions = await Submission.find().sort({ createdAt: -1 });
        const key = req.originalUrl + req.ip;
        await client.set(key, JSON.stringify(submissions));
        return res.status(200).json(new ApiResponse(200, "Submissions fetched successfully", submissions));
    } catch (error) {
        next(new AppError(500, "An error occurred while fetching submissions"));
    }
};

export const createSubmission = async (req, res, next) => {
    try {
        const { userName, language, code, input } = req.body;

        const submission = await Submission.create({
            userName,
            language,
            code,
            input,
        });

        await client.del(req.originalUrl + req.ip);
        // await client.del(req.originalUrl + req.method);
        return res.status(201).json(new ApiResponse(201, "Submission created successfully", submission));
    } catch (error) {
        if (error.name === "ValidationError") {
            error.message = "Please check the data provided";
        }
        console.log(error);
        next(new AppError(500, "An error occurred while creating submission"));
    }
};
