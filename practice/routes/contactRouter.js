const path=require('path');
const express = require("express");
const contactRouter = express.Router();
const rootDir=require('../utils/pathUtil');

contactRouter.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "contactUs.html"));
});

contactRouter.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method, req.body);
  res.sendFile(path.join(rootDir, "views", "contacted.html"));
});

module.exports = contactRouter;
