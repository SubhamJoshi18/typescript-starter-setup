import { Router } from "express";
import {
  authLoginController,
  authRegisterController,
} from "../controller/auth.controller";
const authRouter: Router = Router();

authRouter.post("/auth/signup", authRegisterController);
authRouter.post("/auth/login", authLoginController);
export default authRouter;
