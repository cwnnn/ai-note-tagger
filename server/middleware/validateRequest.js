import { tagNoteRequestSchema } from "../schemas/tagNote.schema.js";
import { validateSchema } from "../utils/validateSchema.js";
import AppError from "../utils/AppError.js";

export function validateRequestMiddleware(req, res, next) {
  try {
    validateSchema(tagNoteRequestSchema, req.body);
    next();
  } catch (err) {
    if (err instanceof AppError) {
      return next(err);
    }

    next(new AppError("Request validation failed", 400));
  }
}
