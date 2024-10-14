// const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const { Programmer } = require("./models/mongoose")
async function SavetoDatabase(record) {
    console.log("Saving to database...");

    try {
        await mongoose.connect("mongodb://localhost:27017/Records")
            .then(() => {
                console.log("Connected successfully to Mongodb ");
            })
            .catch(err => {
                console.error('Connection error:', err);
            });


        await Programmer.insertMany(record)
            .then(() => {
                console.log('Records inserted successfully!');
            }).catch((err) => {
                console.error('Error inserting records:', err);
            })
    }
    catch (error) {
        console.error('Error While inserting Files into the Database ', error);
    }
    finally {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB Database');
    }

}

module.exports = { SavetoDatabase };