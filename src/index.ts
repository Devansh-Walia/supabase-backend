import express from "express";
import { applicationConfig } from "./config";

const app = express();
const port = applicationConfig.port;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello! Welcome to the Supabase MFA API service");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
