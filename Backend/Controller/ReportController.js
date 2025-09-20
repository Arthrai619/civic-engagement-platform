const Report = require("../Models/Report");

exports.getReport = async (req, res) => {
  try {
    const data = await Report.find();
    return res.json({ errors: false, data: data });
  } catch (error) {
    return res.status(500).json({ errors: true, message: error.message });
  }
};

exports.postReport = async (req, res) => {
  try {
    const { title, description, latitude, longitude, image } = req.body;
    if (!title || !description || !latitude || !longitude || !image) {
      return res.status(400).json({
        errors: true,
        message:
          "Please include all required fields: title, description, latitude, longitude, and image.",
      });
    }

    const data = await Report.create(req.body);
    return res.json({ errors: false, data: data });
  } catch (error) {
    return res.status(500).json({ errors: true, message: error.message });
  }
};
