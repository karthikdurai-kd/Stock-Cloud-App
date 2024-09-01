import { Router } from "express";
import { getUsers } from "../controller/userController";

const router = Router();

// GET Request to fetch all user data -> "http://localhost:8000/users"
router.get("/", getUsers);

export default router;
