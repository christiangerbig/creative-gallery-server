const router = require("express").Router();
const RequestModel = require("../models/Request.model");

// POST Request
router.post(
  "/request",
  (req, res) => {
    const { email, subject, message } = req.body;
    if (!email || !subject || !message) return res.status(500).json({ errorMessage: "Please enter email, subject and message" });
    // Check email format
    const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
    if (!myRegex.test(email)) return res.status(500).json({ errorMessage: "Email format not correct" });
    const request = {
      email,
      subject,
      message
    }
    RequestModel.create(request)
      .then(
        response => res.status(200).json(response)
      )
      .catch(
        err => res.status(500).json(
          {
            errorMessage: "Create request failed",
            message: err
          }
        )
      );
  }
);

module.exports = router;