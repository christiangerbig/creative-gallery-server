const { Schema, model } = require("mongoose");

const RequestSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const RequestModel = model("request", RequestSchema);

module.exports = RequestModel;


// import mongoose from "mongoose";
// const { Schema, model } = mongoose;

// const RequestSchema = new Schema({
//   email: {
//     type: String,
//     required: true,
//   },
//   subject: {
//     type: String,
//     required: true,
//   },
//   message: {
//     type: String,
//     required: true,
//   },
// });

// const RequestModel = model("request", RequestSchema);

// export default RequestModel;
