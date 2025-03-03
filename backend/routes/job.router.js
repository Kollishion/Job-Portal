import express from "express";
import {
  deleteJob,
  getAllJobs,
  postJob,
  updateJob,
} from "../controllers/jobController.js";
import { isAuthorized } from "../middlewares/auth.js";

const router = express.Router();

router.get("/getAll", getAllJobs);
router.post("/post", isAuthorized, postJob);
router.get("/getMyJobs", isAuthorized, getAllJobs);
router.put("/update/:id", isAuthorized, updateJob);
router.delete("/delete/:id", isAuthorized, deleteJob);

export default router;
