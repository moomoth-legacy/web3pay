import MongooseConnection from '@/lib/mongodb';
import Address from '@/models/addressBook';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await MongooseConnection.connectAdmin();
    const addresses = await Address.find(); // Retrieve all documents from the collection
    await MongooseConnection.disconnect();
    return NextResponse.json({ addresses });
  } catch (error) {
    return NextResponse.error();
  }
}

export async function POST(req: any) {
  try {
    await MongooseConnection.connectAdmin();
    const payload = await req.json(); // Extract data from request body
    const newAddress = new Address(payload);
    await newAddress.save(); // Save the new document
    await MongooseConnection.disconnect();
    return NextResponse.json({ message: 'Address Book created successfully', class: newAddress });
  } catch (error) {
    return NextResponse.error();
  }
}
