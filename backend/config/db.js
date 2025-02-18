import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB connection established!");
  });
  await mongoose.connect(`mongodb+srv://namdao0908:vIvXvwBkMepBkeow@cluster0.8vwbb.mongodb.net/e-commerce`);
};

export default connectDB;
