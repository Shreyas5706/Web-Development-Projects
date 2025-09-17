const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        minLength:3,
        trim:true,
    },
    email:String,
    password:String,
    cart:{
        type: [{
            product: {type: mongoose.Schema.Types.ObjectId, ref: 'product'},
            quantity: {type: Number, default: 1}
        }],
        default: []
    },
    orders:{
        type:Array,
        default:[]
    }, 
    contact:Number, 
    pictures:String
});

module.exports= mongoose.model("user",userSchema);