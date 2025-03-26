const mongoose = require("mongoose");
require("dotenv").config();

// const mongodburl = "mongodb+srv://ajitofficial7070:QgqMpFa6bIAogfp7@cluster0.uwynhv3.mongodb.net/taskManagment?retryWrites=true&w=majority&appName=Cluster0";

const mongodburl = process.env.MONGO_URL;

async function connectDb() {
    try {
        await mongoose.connect(`${mongodburl}`, {  // ✅ Use template literal
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("✅ Mongoose connected successfully");
    } catch (err) {
        console.error("❌ Mongoose connection failed:", err);
        process.exit(1); // Exit the app if DB connection fails
    }
}

module.exports = connectDb;
