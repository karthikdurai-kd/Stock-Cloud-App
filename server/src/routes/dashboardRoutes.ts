import { Router } from "express";
import { getDashboardMetrics } from "../controller/dashboardController";

const router = Router();

// GET Request ->  http://localhost:8000/dashboard/
router.get("/", getDashboardMetrics);

export default router;
