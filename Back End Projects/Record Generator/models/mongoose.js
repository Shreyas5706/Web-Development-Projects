
const mongoose = require("mongoose");
console.log("Inside Mongose");

const ProgrammerSchema = new mongoose.Schema({
    name: String,
    salary:Number,
    language: String,
    city:String,
    isManager:Boolean
});
const Programmer = mongoose.model('Programmer', ProgrammerSchema,'Rcrd');
//The last argument Rcrd specifies where or in which folder to save in the database
console.log("File successfully checked ")
module.exports ={ Programmer }; 
