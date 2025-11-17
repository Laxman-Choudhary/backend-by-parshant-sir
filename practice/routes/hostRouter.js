const path=require('path');
const express = require("express");
const hostRouter = express.Router();
const rootDir=require('../utils/pathUtil');


hostRouter.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = hostRouter;
