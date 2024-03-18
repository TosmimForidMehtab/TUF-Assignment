import {AppError} from "../utils/AppError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import {client} from "../config/redis.js";

export const createSubmissionValidation = (req, res, next) => {
    if (!req.body.userName || !req.body.code || !req.body.input) {
        return next(new AppError(400, "All fields are required"));
    }
    next();
};

export const redisCacheMiddleware = async (req, res, next) => {
    const key = req.originalUrl;
    try {
        const cachedData = await client.get(key);
        if (cachedData) {
            return next(new ApiResponse(200, "Cache hit", JSON.parse(cachedData)));
        }

        next();
    } catch (error) {
        console.log(error);
        next(new AppError(500, "An error occurred while fetching submissions"));
    }
};