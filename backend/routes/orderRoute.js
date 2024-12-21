import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";
import {
  allOrders,
  placeOrder,
  placeOrderRazorPay,
  placeOrderStripe,
  updateStatus,
  userOrders,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.get("/list", adminAuth, allOrders);
orderRouter.get("/status", adminAuth, updateStatus);

orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorPay);

orderRouter.post("/userorders", authUser, userOrders);

export default orderRouter;
