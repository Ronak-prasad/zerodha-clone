require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { Signup, Login, userVerification } = require("./Controller/AuthController");

const app = express();
const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

// --- CORS ---
app.use(cors({
  origin: [
    "http://localhost:3000",      // local dashboard
    "http://localhost:3001",      // local frontend
    "https://zerodha-clone-frontend-blush.vercel.app", // deployed frontend
    "https://zerodhaa-clone-dashboard.vercel.app"      // deployed dashboard
  ],
  credentials: true
}));
app.options("*", cors()); // handle preflight

// --- Middleware ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// --- Auth ---
app.post("/", userVerification);
app.post("/signup", Signup);
app.post("/login", Login);

// --- Holdings ---
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

// --- Positions ---
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch positions" });
  }
});

// --- Orders ---
app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();
    res.send("Order saved!");
  } catch (err) {
    res.status(500).json({ error: "Failed to save order" });
  }
});

app.get("/newOrder", async (req, res) => {
  try {
    const orders = await OrdersModel.find({});
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
  console.log(" Connecting to MongoDB...");
  mongoose
    .connect(MONGO_URL)
    .then(() => console.log(" MongoDB connected!"))
    .catch((err) => console.log(" MongoDB connection error:", err));
});
