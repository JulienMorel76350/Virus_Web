import express from "express";

import { getPayements } from "../controllers/payement.js";

const router = express.Router();

router.get("/", getPayements);

export default router;