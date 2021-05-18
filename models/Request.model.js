const { Schema, model } = require("mongoose");

// 1. Define your schema
const RequestSchema = new Schema(
  {
    email: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  }
);

// define model
const RequestModel = model("request", RequestSchema);

// export model
module.exports = RequestModel;