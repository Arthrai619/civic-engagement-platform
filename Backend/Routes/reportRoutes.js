const  {getReport,postReport}= require("../Controller/ReportController")

const route = require("express").Router()

route.get("/",getReport)
route.post("/",postReport)

module.exports = route
