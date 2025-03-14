// const express = require("express");
import express from "express";
import studentService from "../services/studentService.js";
import path from "path";
const router = express.Router();
// const studentService = require("../services/studentService.js");
function logRequest(req, res, next) {
  console.log("Request came at " + new Date());
  next();
}
router.get("/", logRequest, (req, res) => {
  let studentList = studentService.findAll();
  res.status(200).send(studentList);
});
router.get("/:id", logRequest, (req, res) => {
  let id = req.params.id;
  let studentObj = studentService.getStudentById(id);
  if (!studentObj) {
    return res.status(404).send({ message: "not found" });
  }
  res.status(200).send(studentObj);
});
router.post("/", logRequest, (req, res) => {
  let studentObj = req.body;
  let id = req.params.id;
  res.status(200).send("Data of student having id=" + id + " is required");
});

export default router;
