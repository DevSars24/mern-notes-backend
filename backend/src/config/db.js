import mongoose from "mongoose";

/**
 * Connect to MongoDB using Mongoose
 */
export const connectdb = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error("❌ MONGO_URI is missing in environment variables.");
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(uri);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB");
    console.error(err.message || err);
    process.exit(1);
  }
};