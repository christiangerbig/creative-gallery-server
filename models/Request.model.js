const { Schema, model } = require("mongoose");

// 1. Define your schema
const RequestSchema = new Schema(
  {
    email: String,
    subject: String,
    message: String
  }
);

// define model
const RequestModel = model("request", RequestSchema);

// export model
module.exports = RequestModel;