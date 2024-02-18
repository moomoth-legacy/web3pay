import MongooseConnection from '@/lib/mongodb';
import Invoice from '@/models/invoice';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await MongooseConnection.connectAdmin();
    const invoices = await Invoice.find(); // Retrieve all documents from the collection
    await MongooseConnection.disconnect();
    return NextResponse.json({ invoices });
  } catch (error) {
    return NextResponse.error();
  }
}

export async function POST(req: any) {
  try {
    await MongooseConnection.connectAdmin();
    const payload = await req.json(); // Extract data from request body
    const newInvoice = new Invoice(payload);
    await newInvoice.save(); // Save the new document
    await MongooseConnection.disconnect();
    return NextResponse.json({ message: 'Invoice created successfully', invoice: newInvoice });
  } catch (error) {
    return NextResponse.error();
  }
}
