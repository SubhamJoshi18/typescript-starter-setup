import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import Logger from "./lib/logger";
import prisma from "../prisma/prisma";
import testRouter from "./routes/test.route";
import authRouter from "./routes/auth.route";
import AppError from "./utils/appError";
import { errorHandler } from "./middleware/errorhandler.middleware";
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3001;

//this is to handle json from the frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/favicon.ico", (req: Request, res: Response) => res.sendStatus(204));
// api is the base url
app.use("/api", [testRouter, authRouter]);

//if there is a wrong url
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Cannot find ${req.originalUrl}`, 401));
});

//handle the all error just like a global error middleware
app.use(errorHandler);

//just in case a logger is just a library to print good ui to the terminal
//a function to start the server
const startTheServer = async () => {
  try {
    await prisma.$connect();
    Logger.info("Database connected successfully");
    app.listen(port, () => {
      Logger.http(`Server is running on http://localhost/${port}`);
    });
  } catch (err) {
    Logger.error(`Error starting the server: ${err}`);
  }
};

//invoke the function
startTheServer();
