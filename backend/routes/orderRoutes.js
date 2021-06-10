import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
} from "../controllers/orderController.js";
import { isAdmin, protectProfile } from "../middleware/auth.js";

router.route("/").post(protectProfile, addOrderItems);
router.route("/myorders").get(protectProfile, getMyOrders);

router.route("/:id").get(protectProfile, getOrderById);
router.route("/:id/pay").put(protectProfile, updateOrderToPaid);
router
  .route("/:id/delivered")
  .put(protectProfile, isAdmin, updateOrderToDelivered);

export default router;
