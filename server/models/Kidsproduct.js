import {model, Schema}from "mongoose";

const kidsproductSchema= new Schema({
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
    }
});

const kidsproduct = model('KidsProduct', kidsproductSchema);

export default kidsproduct;