import express from "express";
import {
  register,
  login,
  logout,
  getUser,
  forgotPassword,
  resetPassword,
} from "../controllers/user.controller.js";
import { isAuthorized } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", isAuthorized, logout);
router.post("/forgotPassword", forgotPassword);
router.post("/resetPassword/:id/:token", resetPassword);
router.post("/getUser", isAuthorized, getUser);

export default router;
