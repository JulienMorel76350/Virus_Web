import express from "express";

import {
  createDownload,
  getDownloadCount,
} from "../controllers/downloadController.js";

const router = express.Router();

router.get("/", createDownload);
router.get("/count", getDownloadCount);

export default router;
 