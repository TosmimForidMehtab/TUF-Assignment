import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
        },
        language: {
            type: String,
            enum: {
                values: ["cpp", "java", "python", "javascript"],
                message: "Invalid language",
            },
            default: "cpp",
        },
        code: {
            type: mongoose.Schema.Types.Mixed,
            required: true,
        },
        input: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export const Submission = mongoose.model("Submission", submissionSchema);
