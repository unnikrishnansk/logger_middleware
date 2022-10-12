const express = require("express");
const fs = require("fs");

const app = express();


let demoLogger = (req, res, next) => {
  let current_datetime = new Date();
  let formatted_date =
    current_datetime.getFullYear() +
    "-" +
    (current_datetime.getMonth() + 1) +
    "-" +
    current_datetime.getDate() +
    " " +
    current_datetime.getHours() +
    ":" +
    current_datetime.getMinutes() +
    ":" +
    current_datetime.getSeconds();
  let method = req.method;
  let url = req.url;
  let status = res.statusCode;
  const start = process.hrtime();
  
  
  next();
};


app.use(demoLogger);


app.get("/", (req, res) => {
  res.send("This is the home Page");
});
app.get("/about", (req, res) => {
  res.send("This is the About page");
});
app.post("/add", (req, res) => {
  res.send("Post request");
});
app.listen(8080, () => {
  console.log("listening to port 8080");
});