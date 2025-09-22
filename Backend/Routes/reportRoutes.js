const express = require('express');
const router = express.Router();
const {
  getReports,
  setReport,
} = require('../Controller/ReportController');
const upload = require('../middleware/uploadMiddleware'); // Import multer middleware

router.route('/').get(getReports).post(upload.single('image'), setReport);

module.exports = router;
