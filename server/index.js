import express from "express";
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import Product from './models/Product.js';
import User from './models/User.js';
import Order from './models/Order.js';
const app=express();
app.use(express.json())

const connectMongoDB = async () => {
    const connection = await mongoose.connect(process.env.MONGODB_URI);

    if (connection) {
        console.log('Connected to MongoDB');
    }
}
connectMongoDB();

app.post('/mens_products', async (req, res) => { 

    const { name, price, description, image } = req.body;

    const product = new Product({
        name: name,
        price: price,
        description: description,
        image: image
    });

    try {
        const savedProduct = await product.save();

        res.json({
            success: true,
            data: savedProduct,
            message: 'Product Added Successfully'
        });
    } catch (e) {
        res.json({
            success: false,
            message: e.message
        })
    }
});


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
    });
}
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})