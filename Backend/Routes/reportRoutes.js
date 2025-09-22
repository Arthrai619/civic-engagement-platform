const { getReports, setReport } = require("../Controller/ReportController");
const route = require("express").Router();

route.get("/", getReports);
route.post("/", setReport);

module.exports = route;
