import { Request, Response, NextFunction } from "express";

export const testController = (req: Request, res: Response) => {
  return res.status(201).json({ message: "This is a test controller" });
};
