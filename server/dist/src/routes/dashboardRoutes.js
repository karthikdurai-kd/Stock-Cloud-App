"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardController_1 = require("../controller/dashboardController");
const router = (0, express_1.Router)();
// GET Request ->  http://localhost:8000/dashboard/
router.get("/", dashboardController_1.getDashboardMetrics);
exports.default = router;
