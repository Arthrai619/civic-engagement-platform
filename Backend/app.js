const express = require("express");
const mongoose = require("mongoose");
const reportRoutes = require("./Routes/reportRoutes")
require("dotenv/config")
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send("Hi");
});

app.use("/api/report",reportRoutes)

app.listen(process.env.PORT);

async function DB() {
  try {
    const res = await mongoose.connect(process.env.DB);
    console.log(res.default.STATES.connected);
    return;
  } catch (error) {
    console.log(error.message);
  }
}
DB()




