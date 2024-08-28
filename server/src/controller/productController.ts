import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// getProducts Controller method
export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const search = req.query.search?.toString();
    // Fetching the products typed by user. If the user has not types anything, it will return all the products
    const products = await prisma.products.findMany({
      where: {
        name: {
          contains: search,
        },
      },
    });

    res.json(products);
  } catch (err) {
    res.status(500).json({
      message: "Error retrieving products",
    });
  }
};

// createProduct Controller method
export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { productId, name, price, rating, stockQuantity } = req.body;
    const product = await prisma.products.create({
      data: {
        productId,
        name,
        price,
        rating,
        stockQuantity,
      },
    });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: "Error creating product" });
  }
};
