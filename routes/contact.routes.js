const router = require("express").Router();
const RequestModel = require("../models/Request.model");

// ------------------------------ Create request ---------------------------
router.post(
  "/request",
  (req, res) => {
    const { email, subject, message } = req.body;
    newRequest = {
      email,
      subject,
      message
    }
    RequestModel.create(newRequest)
      .then(
        (response) => {
          res.status(200).json(response);
        }
      )
      .catch(
        (err) => {
          res.status(500).json(
            {
              error: "Create request failed",
              message: err
            }
          );
        }
      );
  }
);

module.exports = router;