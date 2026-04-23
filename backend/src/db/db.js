const mongoose =require('mongoose');

async function connectDB(){
    await mongoose.connect("mongodb+srv://Vaibhav:wQGHSVaQppj1aDlG@cluster0.mjmvv7n.mongodb.net/instagram")

    console.log("Connected to DB");
    
}
