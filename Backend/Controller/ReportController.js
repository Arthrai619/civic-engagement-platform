const Report = require('../Models/Report');

// @desc Get all reports
// @route GET /api/reports
// @access Public
const getReports = async (req, res) => {
  try {
    const reports = await Report.find();
    res.status(200).json({ data: reports });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc Create a new report
// @route POST /api/reports
// @access Public
const setReport = async (req, res) => {
  try {
    const { title, description, latitude, longitude } = req.body;

    if (!title || !description || !latitude || !longitude) {
      return res.status(400).json({ message: 'Please add all fields' });
    }

    const report = await Report.create({
      title,
      description,
      latitude,
      longitude,
      image: req.file ? `/uploads/${req.file.filename}` : '',
    });

    res.status(201).json({ data: report });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getReports,
  setReport,
};
