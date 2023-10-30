const Position = require("../models/position.model.js");
const sendMail = require("../utils/sendMail.js");
const validateCaptchaToken = require("../utils/validateToken.js");

// Create and Save a new Position
const createPosition = async (req, res) => {
    console.log(req.body);
    // Validate request
    if (!req.body) {
        res.status(400).json({
            message: "Content can not be empty!",
            success: false,
        });
    }

    if (req.body.status === "Order") {
        const captchaResponse = await validateCaptchaToken(req.body.token);

        if (!captchaResponse.data.success) {
            return res.status(200).json({ message: "Invalid captcha token" });
        }

        //delete req.body.token;
        delete req.body.token;
    }

    const {
        jobTitle,
        jobType,
        collaborationForm = "None",
        companyName,
        seniorityLevel,
        rate,
        location,
        startDate,
        endDate,
        status,
        description,
        requirements,
        language,
        name,
        email,
        phone,
        address,
    } = req.body;

    const mail = {
        to: process.env.ORDER_EMAIL,
        subject: "Order",
        message: {
            // make it from req.body
            text: `Job Title: ${jobTitle}\nJob Type: ${jobType}\nCollaboration Form: ${collaborationForm}\nCompany Name: ${companyName}\nSeniority Level: ${seniorityLevel}\nMonthly Salary: ${rate}\nLocation: ${location}\nStart Date: ${startDate}\nEnd Date: ${endDate}\nStatus: ${status}\nDescription: ${description}\nRequirements: ${requirements}\nLanguage: ${language}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}`,
            html: `Job Title: ${jobTitle}\nJob Type: ${jobType}\nCollaboration Form: ${collaborationForm}\nCompany Name: ${companyName}\nSeniority Level: ${seniorityLevel}\nMonthly Salary: ${rate}\nLocation: ${location}\nStart Date: ${startDate}\nEnd Date: ${endDate}\nStatus: ${status}\nDescription: ${description}\nRequirements: ${requirements}\nLanguage: ${language}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}`,
        },
    };

    // create and save Position in the database
    try {
        const position = await Position.create(req.body);

        res.status(201).json({
            message: "Position created successfully",
            position,
            success: true,
        });

        if (req.body.status === "Order") {
            await sendMail(mail.to, mail.subject, mail.message);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message || "Some error occurred while creating the Position.",
            success: false,
        });
    }
};

// Retrieve all Positions from the database.
const getPositionsByActiveOrClosedStatus = async (req, res) => {
    const { status = "All", page = 1, limit = 25, search = "" } = req.query;

    let query = {};

    if (status === "All") {
        query = {
            status: { $in: ["Active", "Closed"] },
            $or: [
                { jobTitle: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } },
                { location: { $regex: search, $options: "i" } },
                { companyName: { $regex: search, $options: "i" } },
                { requirments: { $regex: search, $options: "i" } },
            ],
        };
    } else {
        query = {
            status,
            $or: [
                { jobTitle: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } },
                { location: { $regex: search, $options: "i" } },
                { companyName: { $regex: search, $options: "i" } },
                { requirments: { $regex: search, $options: "i" } },
            ],
        };
    }

    try {
        const positions = await Position.find(query)
            .sort({ createdAt: -1 })
            .limit(limit)
            .skip((page - 1) * limit);

        res.status(200).json({
            message: "Positions retrieved successfully",
            positions,
            success: true,
            pageCount:
                (await Position.countDocuments({
                    status: { $in: ["Active", "Closed"] },
                })) / limit,
            totalCount: await Position.countDocuments({
                status: { $in: ["Active", "Closed"] },
            }),
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while retrieving positions.",
            success: false,
        });
    }
};

const getPositionsByInactiveStatus = async (req, res) => {
    const { page = 1, limit = 25, search = "" } = req.query;

    let query = {
        status: "Inactive",
        $or: [
            { jobTitle: { $regex: search, $options: "i" } },
            { description: { $regex: search, $options: "i" } },
            { location: { $regex: search, $options: "i" } },
            { companyName: { $regex: search, $options: "i" } },
            { requirments: { $regex: search, $options: "i" } },
        ],
    };

    try {
        const positions = await Position.find(query)
            .sort({ createdAt: -1 })
            .limit(limit)
            .skip((page - 1) * limit);

        res.status(200).json({
            message: "Positions retrieved successfully",
            positions,
            success: true,
            pageCount:
                (await Position.countDocuments({
                    status: "Inactive",
                })) / limit,
            totalCount: await Position.countDocuments({
                status: "Inactive",
            }),
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while retrieving positions.",
            success: false,
        });
    }
};

const getPositionsByOrderStatus = async (req, res) => {
    const { page = 1, limit = 25, search = "" } = req.query;

    let query = {
        status: "Order",
        $or: [
            { jobTitle: { $regex: search, $options: "i" } },
            { description: { $regex: search, $options: "i" } },
            { location: { $regex: search, $options: "i" } },
            { companyName: { $regex: search, $options: "i" } },
            { requirments: { $regex: search, $options: "i" } },
        ],
    };

    try {
        const positions = await Position.find(query)
            .sort({ createdAt: -1 })
            .limit(limit)
            .skip((page - 1) * limit);

        res.status(200).json({
            message: "Positions retrieved successfully",
            positions,
            success: true,
            pageCount:
                (await Position.countDocuments({
                    status: "Order",
                })) / limit,
            totalCount: await Position.countDocuments({
                status: "Order",
            }),
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while retrieving positions.",
            success: false,
        });
    }
};

const changePositionStatus = async (req, res) => {
    const { positionId } = req.params;
    const { status } = req.body;
    try {
        const changedPositionStatus = await Position.findByIdAndUpdate(
            {
                _id: positionId,
            },
            {
                status,
            },
            {
                new: true,
            }
        );

        res.status(200).json({
            message: "Position status updated successfully",
            changedPositionStatus,
            success: true,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while updating position.",
            success: false,
        });
    }
};

const getAllPositions = async (req, res) => {
    const { page = 1, limit = 9 } = req.query;
    try {
        const positions = await Position.find({
            status: { $in: ["Active", "Closed"] },
        })
            .sort({ createdAt: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);

        res.status(200).json({
            message: "Positions retrieved successfully",
            positions,
            success: true,
            pageCount:
                (await Position.countDocuments({
                    status: { $in: ["Active", "Closed"] },
                })) / limit,
            totalCount: await Position.countDocuments({
                status: { $in: ["Active", "Closed"] },
            }),
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while retrieving positions.",
            success: false,
        });
    }
};

const deletePosition = async (req, res) => {
    const { positionId } = req.params;
    try {
        const deletedPosition = await Position.findByIdAndDelete(positionId);

        res.status(200).json({
            message: "Position deleted successfully",
            deletedPosition,
            success: true,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while deleting position.",
            success: false,
        });
    }
};

const getSinglePositionById = async (req, res) => {
    const { positionId } = req.params;
    try {
        const position = await Position.findById(positionId);

        res.status(200).json({
            message: "Position retrieved successfully",
            position,
            success: true,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while deleting position.",
            success: false,
        });
    }
};

const editPosition = async (req, res) => {
    const { positionId } = req.params;
    try {
        const position = await Position.findByIdAndUpdate(
            {
                _id: positionId,
            },
            {
                ...req.body,
            },
            {
                new: true,
            }
        );

        res.status(200).json({
            message: "Position updated successfully",
            position,
            success: true,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while deleting position.",
            success: false,
        });
    }
};

module.exports = {
    createPosition,
    getPositionsByActiveOrClosedStatus,
    getPositionsByInactiveStatus,
    changePositionStatus,
    getAllPositions,
    deletePosition,
    getSinglePositionById,
    editPosition,
    getPositionsByOrderStatus,
};
