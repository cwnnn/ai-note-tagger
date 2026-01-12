import rateLimit from "express-rate-limit";
import AppError from "../utils/AppError.js";

export const tagNoteLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res, next) => {
    next(new AppError("Too many requests, please try again later.", 429));
  },
});
