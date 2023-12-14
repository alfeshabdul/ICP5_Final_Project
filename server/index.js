import express from "express";
import dotenv from "dotenv";
dotenv.config();


import mongoose from "mongoose";
import Mensproduct from "./models/Product.js";
import Womensproduct from "./models/WomrnsProduct.js";
import Kidsproduct from "./models/Kidsproduct.js";
import Homeproduct from "./models/Homeproduct.js";
import User from "./models/User.js";
import Order from "./models/Order.js";

const app = express();
app.use(express.json());

const connectMongoDB = async () => {
  const connection = await mongoose.connect(process.env.MONGODB_URI);

  if (connection) {
    console.log("Connected to MongoDB");
  }
};
connectMongoDB();

app.post("/mensproducts", async (req, res) => {
  const { name, price, description, image, category } = req.body;

  const mensproduct = new Mensproduct({
    name: name,
    price: price,
    description: description,
    image: image,
    category: category
  });

  try {
    const savedMensproduct = await mensproduct.save();

    res.json({
      success: true,
      data: savedMensproduct,
      message: "Product Added Successfully",
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
});

app.get("/mensproducts", async (req, res) => {
  const mensproduct = await Mensproduct.find();

  res.json({
    success: true,
    data: mensproduct,
    message: "Products Retrieved successfully",
  });
});

app.delete("/mensproducts/:id", async (req, res) => {
  const { id } = req.params;
  await Mensproduct.deleteOne({ _id: id });

  res.json({
    success: true,
    message: "Product deleted successfully",
  });
});

app.post("/womensproducts", async (req, res) => {
  const { name, price, description, image } = req.body;

  const womensproduct = new Womensproduct({
    name: name,
    price: price,
    description: description,
    image: image,
  });

  try {
    const savedWomensproduct = await womensproduct.save();

    res.json({
      success: true,
      data: savedWomensproduct,
      message: "Product Added Successfully",
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
});

app.get("/womensproducts", async (req, res) => {
  const womensproduct = await Womensproduct.find();

  res.json({
    success: true,
    data: womensproduct,
    message: "Product Retrived successfully",
  });
});

app.post("/kidsproducts", async (req, res) => {
  const { name, price, description, image } = req.body;

  const kidsproduct = new Kidsproduct({
    name: name,
    price: price,
    description: description,
    image: image,
  });

  try {
    const savedKidsproduct = await kidsproduct.save();

    res.json({
      success: true,
      data: savedKidsproduct,
      message: "Product Added Successfully",
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
});

app.get("/kidsproducts", async (req, res) => {
  const kidsproduct = await Kidsproduct.find();

  res.json({
    success: true,
    data: kidsproduct,
    message: "Product Retrived successfully",
  });
});

app.post("/homeproducts", async (req, res) => {
  const { name, price, description, image } = req.body;

  const homeproduct = new Homeproduct({
    name: name,
    price: price,
    description: description,
    image: image,
  });

  try {
    const savedHomeproduct = await homeproduct.save();

    res.json({
      success: true,
      data: savedHomeproduct,
      message: "Product Added Successfully",
    });
  } catch (e) {
    res.json({
      success: false,
      message: e.message,
    });
  }
});

app.get("/homeproducts", async (req, res) => {
  const homeproduct = await Homeproduct.find();

  res.json({
    success: true,
    data: homeproduct,
    message: "Product Retrived successfully",
  });
});

app.post("/Signup", async (req, res) => {
  const { name, email, mobile, password } = req.body;

  const user = new User({
    name: name,
    email: email,
    mobile: mobile,
    password: password,
  });

  try {
    const savedUser = await user.save();

    return res.json({
      success: true,
      data: savedUser,
      message: "User registered successfully",
    });
  } catch (e) {
    return res.json({
      success: false,
      message: e.message,
    });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email, password: password });

  if (user) {
    return res.json({
      success: true,
      data: user,
      message: "User logged in successfully",
    });
  } else {
    return res.json({
      success: false,
      message: "Invalid email or password",
    });
  }
});

app.post("/order", async (req, res) => {
  const { product, user, quantity, shippingAddress } = req.body;

  const order = new Order({
    product: product,
    user: user,
    quantity: quantity,
    shippingAddress: shippingAddress,
  });

  const savedOrder = await order.save();

  return res.json({
    success: true,
    data: savedOrder,
    message: "Order placed successfully",
  });
});

app.get("/orders", async (req, res) => {
  const { id } = req.query;

  const orders = await Order.find({ user: id }).populate("product user");
  res.json({
    success: true,
    data: orders,
    message: "Orders retrived succesfully.",
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
