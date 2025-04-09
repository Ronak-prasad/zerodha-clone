require("dotenv").config();


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");



const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const {Signup, userVerification, Login} = require("./Controller/AuthController")

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: [
    "http://localhost:3001", //frontend local
    "http://localhost:3000", //dashboard local
    "https://zerodha-clone-frontend-blush.vercel.app/",//frontend url
    "https://zerodhaa-clone-dashboard.vercel.app/"//dashboard local
  ], 
  credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/", userVerification);

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
  res.send("Order saved!");
});

app.get("/newOrder", async (req, res) => {
    let newOrder = await OrdersModel.find({});
    res.json(newOrder);
  });

app.post("/signup",Signup );

app.post("/login", Login);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
  console.log("connecting to DB...");
  
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected!"))
    .catch((err) => console.log("MongoDB connection error:", err))
});