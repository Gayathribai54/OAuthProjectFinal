import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      required: true,
      unique: true
    },
    name: String,
    email: String,
    avatar: String,
    provider: {
      type: String,
      default: "google"
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
