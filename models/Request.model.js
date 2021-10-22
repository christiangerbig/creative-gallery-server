import mongoose from "mongoose";
const { Schema, model } = mongoose;

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

export default RequestModel;
