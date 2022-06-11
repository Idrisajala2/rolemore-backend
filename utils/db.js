const mongoose = require("mongoose");
const url = "mongodb://localhost/more";

mongoose
  .connect(url)
  .then(() => {
    console.log("you have successfully connected to database");
  })
  .catch(() => {
    console.log("cannot connect to database");
  });
