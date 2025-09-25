const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.listen(PORT, () => {
  console.log(`Server is live on PORT http://localhost:${PORT}`);
});
