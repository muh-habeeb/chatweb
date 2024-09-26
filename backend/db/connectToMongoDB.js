// import mongoose from "mongoose";

// const connectToMongoDB = async () => {
// 	try {
// 		await mongoose.connect(process.env.MONGO_DB_URI);
// 		console.log("Connected to MongoDB");
// 	} catch (error) {
// 		console.log("Error connecting to MongoDB", error.message);
// 	}
// };

// export default connectToMongoDB;
// db/connectToMongoDB.js
import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    const uri = process.env.MONGODB_URI; // Ensure this matches your .env
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1); // Exit if the connection fails
  }
};

export default connectToMongoDB;
