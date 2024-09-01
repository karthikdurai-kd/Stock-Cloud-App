"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controller/userController");
const router = (0, express_1.Router)();
// GET Request to fetch all user data -> "http://localhost:8000/users"
router.get("/", userController_1.getUsers);
exports.default = router;
