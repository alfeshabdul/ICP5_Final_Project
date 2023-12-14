import {model, Schema}from "mongoose";

const homeproductSchema= new Schema({
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

const homeproduct = model('HomeProduct', homeproductSchema);

export default homeproduct;