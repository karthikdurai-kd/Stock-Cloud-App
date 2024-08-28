"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controller/productController");
const router = (0, express_1.Router)();
// GET Reuest ->  "http://localhost:8000/products/"
router.get("/", productController_1.getProducts);
// POST Request ->  "http://localhost:8000/products/
router.post("/", productController_1.createProduct);
exports.default = router;
