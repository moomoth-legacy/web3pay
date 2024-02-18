// Import mongoose
import mongoose from 'mongoose';

// Define the schema
const addressSchema = new mongoose.Schema({
  ClientName: {
    type: String,
    required: true,
    trim: true,
  },
  Wallet: {
    type: String,
    required: true,
    trim: true,
  },
  Address1: {
    type: String,
    required: true,
    trim: true,
  },
  Address2: {
    type: String,
    trim: true,
  },
  PinOrZip: {
    type: String,
    required: true,
    trim: true,
  },
  Country: {
    type: String,
    required: true,
    trim: true,
  },
  Note: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Address model
const Address = mongoose.models.Address || mongoose.model('Address', addressSchema);

// Export the model
export default Address;
