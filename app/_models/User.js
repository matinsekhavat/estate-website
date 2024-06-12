import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.models.User || mongoose.model("User", schema);

export default userModel;
