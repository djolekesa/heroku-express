import express from "express";
import { getAllExamples, createExample } from "./controller";

const router = express.Router();

router.get("/", getAllExamples);
router.post("/", createExample);

export default router;
