const express = require("express");
const bodyParser = require("body-parser");
const Razorpay = require("razorpay");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = 5000;

// Razorpay credentials
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.use(bodyParser.json());
app.use(cors());

// Endpoint to create a new order
app.post("/api/orders", async (req, res) => {
  try {
    const options = {
      amount: req.body.amount, // amount in paise
      currency: "INR",
      receipt: "receipt#1",
    };
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to verify payment
app.post("/api/verify", (req, res) => {
  const { orderId, paymentId, signature } = req.body;
  const crypto = require("crypto");

  const generatedSignature = crypto
    .createHmac("sha256", "YOUR_KEY_SECRET")
    .update(`${orderId}|${paymentId}`)
    .digest("hex");

  if (generatedSignature === signature) {
    res.json({ success: true });
  } else {
    res.status(400).json({ error: "Invalid signature" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
