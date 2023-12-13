import {model, Schema}from "mongoose";

const mensproductSchema= new Schema({
    image:{
        type: String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    price:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    category:{
        type: String,
        require: true
    }
});

const mensproduct = model('MensProduct', mensproductSchema);

export default mensproduct;