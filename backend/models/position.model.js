const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            default: "Z01-" + Math.floor(Math.random() * 900000 + 100000),
            unique: true,
        },
        jobTitle: {
            type: String,
            required: true,
            trim: true,
        },
        jobType: {
            type: String,
            required: true,
            trim: true,
        },
        collaborationForm: {
            type: String,
            trim: true,
            default: "None",
        },
        companyName: {
            type: String,
            required: true,
            trim: true,
        },
        seniorityLevel: {
            type: String,
            required: true,
            trim: true,
        },
        rate: {
            type: String,
            required: true,
            trim: true,
        },
        location: {
            type: String,
            required: true,
            trim: true,
        },
        startDate: {
            type: String,
            required: true,
            trim: true,
        },
        endDate: {
            type: String,
            required: true,
            trim: true,
        },
        status: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        requirements: {
            type: String,
            required: true,
            trim: true,
        },
        language: {
            type: String,
            required: true,
            trim: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
            default: "Admin",
        },
        email: {
            type: String,
            required: true,
            trim: true,
            default: "Admin",
        },
        phone: {
            type: String,
            required: true,
            trim: true,
            default: "Admin",
        },
        address: {
            type: String,
            required: true,
            trim: true,
            default: "Admin",
        },
    },
    {
        timestamps: true,
    }
);

const Position = mongoose.model("Position", positionSchema);

module.exports = Position;
