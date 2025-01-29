import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { APIResponse } from "./utils/APIResponse.js";
import { APIError } from "./utils/APIError.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// route imports
import healthcheckRouter from "./routes/healthcheck.routes.js";

// route declaration
app.use("/api/v2/healthcheck", healthcheckRouter);

// catch-all route
app.use((req, res, next) => {
  res.status(404).json(new APIResponse(404, null, "Route not found"));
});

// use custom error middleware
app.use((err, req, res, next) => {
  if (err instanceof APIError) {
    return res
      .status(err.statusCode)
      .json(new APIResponse(err.statusCode, null, err.message));
  }

  console.error("Unexpected error", err);
  return res
    .status(500)
    .json(new APIResponse(500, null, "Internal server error"));
});

export { app };
