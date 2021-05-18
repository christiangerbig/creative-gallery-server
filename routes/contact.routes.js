const router = require("express").Router();
const RequestModel = require("../models/Request.model");

// ------------------------------ Create request ---------------------------
router.post(
  "/request", 
  (req, res) => {
    const { email, subject, message } = req.body;
    // Server side validation
    if (!email || !subject || !message) {
      res.status(500).json(
        {
        errorMessage: "Please enter email, subject and message"
        }
      );
      return;  
    }
    const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);         
    if (!myRegex.test(email)) {
      res.status(500).json(
        {
          errorMessage: "Email format not correct"
        }
      );
      return;
    }
    // Create message
    const request = {
      email,
      subject,
      message
    }
    RequestModel.create(request)
      .then(
        (response) => {
          res.status(200).json(response);
        }
      )
      .catch(
        (err) => {
          res.status(500).json(
            {
              errorMessage: "Create request failed",
              message: err
            }
          );
        }
      );
  }
);

/*router.post(
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
              errorMessage: "Create request failed",
              message: err
            }
          );
        }
      );
  }
);*/

module.exports = router;