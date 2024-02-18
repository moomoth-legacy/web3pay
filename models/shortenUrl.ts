// Import mongoose
import mongoose from 'mongoose';

// Define the schema
const shortenUrlSchema = new mongoose.Schema({
  invoiceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Invoice',
    required: true,
  },
  shortenURL: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the ShortenUrl model
const ShortenUrl = mongoose.models.ShortenUrl || mongoose.model('ShortenUrl', shortenUrlSchema);

// Export the model
export default ShortenUrl;
