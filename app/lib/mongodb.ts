import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return;
    }
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("connected to db");
  } catch (error: any) {
    console.log(error.message);
  }
};

export { connectToDB };
