const router = require("express").Router();
const RequestModel = require("../models/Request.model");

// POST Request
router.post("/request/create", (req, res) => {
  const { email, subject, message } = req.body;
  // Check request requirements
  if (!email) {
    res
      .status(500)
      .json({ errorMessage: "Email missing" });
    return;
  }
  if (!subject) {
    res
      .status(500)
      .json({ errorMessage: "Subject missing" });
    return;
  }
  if (!message) {
    res
      .status(500)
      .json({ errorMessage: "Message missing" });
    return;
  }
  // Check email format
  const myRegex = new RegExp(
    /^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/
  );
  if (!myRegex.test(email)) {
    res.status(500).json({ errorMessage: "Invalid email format" });
    return;
  }
  const request = {
    email,
    subject,
    message,
  };
  RequestModel.create(request)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        errorMessage: "Create request failed",
        message: err,
      });
    });
});

module.exports = router;
