const { getReports, setReport } = require("../controllers/reportController");
const route = require("express").Router();

route.get("/", getReports);
route.post("/", setReport);

module.exports = route;
