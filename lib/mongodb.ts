// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from 'mongoose';

class MongooseConnection {
  static client: any;

  static async connectAdmin() {
    if (!this.client) {
      this.client = await mongoose.connect(process.env.MONGODB_URI_ADMIN || '');
      console.log('MongoDB ADMIN connected');
    }
    return this.client;
  }

  static async disconnect() {
    try {
      if (this.client) {
        await mongoose.disconnect();
        console.log('MongoDB disconnected');
        this.client = null;
      }
    } catch (error) {
      console.error('Error disconnecting from MongoDB:', error);
      throw error; // Rethrow the error to be handled by the caller
    }
  }
}

export default MongooseConnection;
