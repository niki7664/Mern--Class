import mongoose from "mongoose";
import { databaseLink } from "../src/constant.js";
let connectToMongoDB = async () => {
  try {
    await mongoose.connect(databaseLink);
    console.log("Application is connected to MongoDB database successfully");
  } catch (error) {
    console.log(error.message);
  }
};
export default connectToMongoDB;