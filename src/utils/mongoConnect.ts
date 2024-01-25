import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL!);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('MongoDB connection error:', error);
  }
};

export default connectDB
