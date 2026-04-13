const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Vasavi:vasavi@cluster0.jqfevp1.mongodb.net/?appName=Cluster0');
    console.log('MongoDB Connected ✅');
  } catch (error) {
    console.log('Error:', error);
  }
};

module.exports = connectDB;

