import mongoose from "mongoose";

const connectToDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Connection with DB established.");
  });

  await mongoose.connect(`${process.env.MONGODB_URL}/ecommerce`);
};

export default connectToDB;
