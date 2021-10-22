import { Router } from "express";
const router = Router();

router.get("/", (req, res) => res.json("Site loaded"));

export default router;
