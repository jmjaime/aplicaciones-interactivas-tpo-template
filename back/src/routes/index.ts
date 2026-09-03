import { Router } from "express";

export const router = Router();

router.get("/health", (_request, response) => {
  response.json({ status: "ok" });
});
