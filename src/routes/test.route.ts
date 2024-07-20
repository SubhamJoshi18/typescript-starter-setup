import { Router } from "express";
import { testController } from "../controller/test.controller";
const testRouter: Router = Router();

testRouter.get("/test", testController);

export default testRouter;
