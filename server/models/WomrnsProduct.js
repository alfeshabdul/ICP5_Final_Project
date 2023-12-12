import {model, Schema}from "mongoose";

const womensproductSchema= new Schema({
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

const womensproduct = model('WomensProduct', womensproductSchema);

export default womensproduct;