import { NextFunction, Request, Response } from "express";
import { CustomError } from "../@types/customError.interface";
import { statusConstants } from "../constants/statusConstant";
import HttpStatus from "http-status-codes";

const { ERROR } = statusConstants;
export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  console.log(err.message, err.name);
  err.statusCode = err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
  err.status = err.status || ERROR;

  return res.status(403).json({
    statuscode: err.statusCode,
    message: err.message,
    status: err.name,
  });
};
