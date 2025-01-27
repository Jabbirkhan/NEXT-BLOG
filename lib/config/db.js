// app/lib/config/db.js
import mongoose from "mongoose";

export const ConnectDB = async () => {
    try {
        if (mongoose.connection.readyState === 0) { // Ensure we only connect if not already connected
            await mongoose.connect('mongodb+srv://jabbirk08:zmJ5AaKDh3qrg6jk@cluster0.8uu8m.mongodb.net/blog-app', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                // Remove bufferCommands and bufferTimeoutMS
            });
            console.log("DB Connected");
        }
    } catch (error) {
        console.error("DB Connection Error:", error);
        throw new Error("Database connection failed");
    }
};
