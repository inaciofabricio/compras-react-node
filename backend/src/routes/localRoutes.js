import express from "express";
import { getLocais, getLocal, setLocal, updateLocal, deleteLocal } from "../controllers/localController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/api/local/").get(getLocais);
router.route("/api/local/:id").get(getLocal);
router.route("/api/local/").post(protect, setLocal);
router.route("/api/local/:id").put(protect, updateLocal);
router.route("/api/local/:id").delete(protect, deleteLocal);

export default router;