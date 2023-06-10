import mongoose from "mongoose";

const { Schema } = mongoose;

const nextuserSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports =
    mongoose.models.NextUser || mongoose.model('NextUser', nextuserSchema);
//NextUser is collection name in next db(given in env)