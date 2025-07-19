import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://admin:admin123@cluster0.ua2fbwe.mongodb.net/foot-del').then(()=>console.log("DataBase Connected"));
}