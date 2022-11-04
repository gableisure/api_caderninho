import { Router } from "express";
import { AuthController } from "../auth/useCases/AuthController";
import authMiddleware from "../middlewares/authMiddleware";

const authRoutes = Router();

const authController = new AuthController();

authRoutes.post("/", authController.handle);
authRoutes.get("/", authMiddleware, authController.handle);

export { authRoutes };
