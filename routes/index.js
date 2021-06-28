const router = require("express").Router();

router.get(
  "/", 
  (req, res) => res.json("Side loaded")
);

module.exports = router;