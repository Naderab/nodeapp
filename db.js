const mongoose = require('mongoose');

const uri = process.env.NODE_ENV === 'test' ? process.env.MONGO_URI : process.env.MONGO_URI_TEST;
console.log(process.env.NODE_ENV);
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://mehdy:123456m@cluster0.1vtradk.mongodb.net/?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        console.log("MongoDB Connected")
    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;