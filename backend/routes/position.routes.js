const express = require("express");
const {
    createPosition,
    getAllPositions,
    getPositionsByActiveOrClosedStatus,
    deletePosition,
    changePositionStatus,
    getSinglePositionById,
    editPosition,
    getPositionsByInactiveStatus,
    getPositionsByOrderStatus,
} = require("../controllers/position.controller");

const router = express.Router();

router.post("/create", createPosition);

router.get("/positions", getAllPositions);

router.get("/positions/:positionId", getSinglePositionById);

router.delete("/positions/:positionId", deletePosition);

router.patch("/positions/:positionId", changePositionStatus);

router.get("/active-closed", getPositionsByActiveOrClosedStatus);

router.get("/inactive", getPositionsByInactiveStatus);

router.get("/order", getPositionsByOrderStatus);

router.patch("/positions/edit/:positionId", editPosition);

module.exports = router;
