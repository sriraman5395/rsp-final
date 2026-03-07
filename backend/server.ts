import express from "express";
import cors from "cors";
import { apiRouter } from "./src/routes/api";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

const app = express();
const rootDir = path.resolve();

app.use(cors());
app.use(express.json());

/* API routes */
app.use("/api", apiRouter);

/* Serve uploads */
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

/* Serve React build */
app.use(express.static(path.join(rootDir, "../frontend/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, "../frontend/dist/index.html"));
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

