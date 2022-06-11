require("dotenv").config();
require("./utils/db");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 1101;

app.use(cors());

app.use(express.json());

app.use("/api/user", require("./router/userRouter"));

app.use("/api/rating", require("./router/ratingRouter"));
app.use("/api/like", require("./router/likeRouter"));
app.use("/api/item", require("./router/itemRouter"));

app.get("/", (req, res) => {
  res.json("welcome to new api");
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
