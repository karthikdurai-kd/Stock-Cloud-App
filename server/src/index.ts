import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

/* ROUTE IMPORTS */
import dashboardRoutes from "./routes/dashboardRoutes";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
// 1. Dashboard related routes
app.use("/dashboard", dashboardRoutes); // API Endpoint -> http:localhost:8000/dashboard

// 2. Product related routes
app.use("/products", productRoutes); // API Endpoint -> http:localhost:8000/products

// 3. User related routes
app.use("/users", userRoutes); // API Endpoint -> http:localhost:8000/users

/* SERVER */
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
