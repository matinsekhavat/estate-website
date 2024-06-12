import mongoose from "mongoose";

export default async function connectToDb() {
  try {
    if (mongoose.connections[0].readyState) {
      //true is once is already Connected
      return false;
    }
    await mongoose.connect("mongodb://127.0.0.1/real-estate");
    console.log("Connected Successfully");
  } catch (error) {
    throw new Error("sth went wrong", error);
  }
}
