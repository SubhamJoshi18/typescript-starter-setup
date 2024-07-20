import { Request, Response } from "express";

export const authRegisterController = (req: Request, res: Response) => {
  return res.status(201).json({
    message: "This is a register controller",
  });
};

export const authLoginController = (req: Request, res: Response) => {
  return res.status(201).json({
    message: "This is a login Controller",
  });
};
