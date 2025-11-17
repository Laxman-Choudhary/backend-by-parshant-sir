const path=require('path')
// External Module
const express = require('express');

const app = express();

const rootDir=require('./utils/pathUtil');
const hostRouter = require('./routes/hostRouter');
const contactRouter = require('./routes/contactRouter');
app.use(express.urlencoded({extended:true}));

app.use((req, res, next) => {
  console.log("First Dummy Middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second Dummy Middleware", req.url, req.method);
  next();
});

app.use(hostRouter);
app.use(contactRouter);
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,'views','404.html'));
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});