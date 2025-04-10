const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Mini_Project1");
const userschema = mongoose.Schema({
    username: String,
    name: String,
    age: Number,
    email: String,
    password: String,
    post: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }] 
});
module.exports = mongoose.model("User", userschema);
