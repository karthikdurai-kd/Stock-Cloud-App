import { Router } from "express";
import { createProduct, getProducts } from "../controller/productController";

const router = Router();

// GET Reuest ->  "http://localhost:8000/products/"
router.get("/", getProducts);

// POST Request ->  "http://localhost:8000/products/
router.post("/", createProduct);

export default router;
