const express = require("express");

const app = express();

app.use(express.json());

app.use("/", require("./topics"));
app.use("/", require("./categories"));

app.listen(8080, () => {
  console.log("Listening on Port 8080");
});
