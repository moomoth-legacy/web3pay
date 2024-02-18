// Import mongoose
import mongoose from 'mongoose';

// Define the schema
const invoiceSchema = new mongoose.Schema({
  invoiceName: {
    type: String,
    required: true,
    trim: true,
  },
  billTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  invoiceCurrency: {
    type: String,
    required: true,
  },
  wallet: {
    type: String,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  tax: {
    type: Number,
    required: true,
  },
  issueDate: {
    type: Date,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  note: {
    type: String,
    required: true,
    trim: true,
  },
  total: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the Invoice model
const Invoice = mongoose.models.Invoice || mongoose.model('Invoice', invoiceSchema);

// Export the model
export default Invoice;
