import express from "express";
import path from "path";
const __dirname = path.resolve();

// const studentRouter = require("./routers/studentRouter");
import studentRouter from "./routers/studentRouter.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/students", studentRouter);
app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});
app.listen(3000, () => {
  console.log("Server started at port number 3000");
});
