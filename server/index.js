import dotenv from 'dotenv';
dotenv.config({
    path: './env'
});

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from './routes/posts.routes.js'

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://benediction:Q1nwPEwmtGBT9eUq@cluster0.fkcmqjl.mongodb.net/";
const PORT = 3000;

const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(`${CONNECTION_URL}`);
        console.log("MongoDB connected");
        app.listen(PORT, () => console.log(`Server running on ${PORT}`));
    } catch (error) {
        console.log("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};

connectDB();
