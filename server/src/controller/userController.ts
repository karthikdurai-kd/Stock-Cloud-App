import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// getUsers controller method which fetched all the user data from the database
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    // Fetches all users from database
    const users = await prisma.users.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error in fetching users data" });
  }
};
