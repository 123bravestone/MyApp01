import express from "express";
import {
  createUser,
  validateUser,
  verifyOTP,
} from "../controllers/userController.js";
import { sentOTP } from "../utils/sendSMS.js";
const router = express.Router();

router
  .post("/verify_user", createUser)
  .post("/message", sentOTP)
  .post("/verify_otp", verifyOTP)
  .post("/validate", validateUser);

export default router;
