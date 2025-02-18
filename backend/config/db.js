import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://namdao0908:vIvXvwBkMepBkeow@cluster0.8vwbb.mongodb.net/e-commerce"
    )
    .then(() => console.log("DB Connected!"));
};
