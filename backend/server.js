import express from "express";
import "dotenv/config";
import cors from "cors";
import connectToDB from "./config/mongodb.js";
import connectToCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";

const app = express();
const port = process.env.PORT || 4000;
connectToDB();
connectToCloudinary();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log(`Server started on PORT: ${port}`));
