

import express from "express";
import passport from "passport";
import { logout, getMe } from "../controllers/auth.controller.js";

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    successRedirect: process.env.CLIENT_URL + "/dashboard"
  })
);

router.get("/me", getMe);
router.post("/logout", logout);

export default router;
