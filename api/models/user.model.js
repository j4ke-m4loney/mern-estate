// Import the Mongoose library to interact with MongoDB
import mongoose from "mongoose";

// Define the schema for the User model
const userSchema = new mongoose.Schema(
  {
    username: {
      // Field for the user's username
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: false,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  // // Adds `createdAt` and `updatedAt` timestamps automatically
  { timestamps: true } // Allows to save time of creation and the time that the model has been updated
);

const User = mongoose.model("User", userSchema);

export default User;