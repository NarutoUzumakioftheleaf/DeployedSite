const express = require("express");
const router = express.Router();
const Order = require("../models/Orders");

router.post("/orderData", async (req, res) => {
  try {
    // Check if email is provided
    if (!req.body.email) {
      return res.status(400).json({ error: "Email is required" });
    }

    let data = req.body.order_data;
    data.splice(0, 0, { Order_date: req.body.order_date });

    let eId = await Order.findOne({ email: req.body.email });
    if (eId === null) {
      // Create new order if email doesn't exist
      await Order.create({
        email: req.body.email,
        order_data: [data],
      });
    } else {
      // Update existing order if email exists
      await Order.findOneAndUpdate(
        { email: req.body.email },
        { $push: { order_data: data } }
      );
    }
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

router.post("/myorderData", async (req, res) => {
  try {
    // Check if email is provided
    if (!req.body.email) {
      return res.status(400).json({ error: "Email is required" });
    }

    let myData = await Order.findOne({ email: req.body.email });
    if (!myData) {
      return res.status(404).json({ error: "No orders found for this email" });
    }

    res.json({ orderData: myData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;