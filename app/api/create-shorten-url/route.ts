import MongooseConnection from '@/lib/mongodb';
import { NextResponse } from 'next/server';
import { customAlphabet } from 'nanoid';
import ShortenUrl from '@/models/shortenUrl';

export async function GET() {
  try {
    await MongooseConnection.connectAdmin();
    const addresses = await ShortenUrl.find(); // Retrieve all documents from the collection
    await MongooseConnection.disconnect();
    return NextResponse.json({ addresses });
  } catch (error) {
    return NextResponse.error();
  }
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const getHash = customAlphabet(characters, 9);

export async function POST(req: any) {
  try {
    await MongooseConnection.connectAdmin();
    const { invoiceId } = await req.json(); // Extract data from request body
    const hash = getHash();
    const payload = { invoiceId, shortenURL: hash };
    const newAddress = new ShortenUrl(payload);
    await newAddress.save(); // Save the new document
    await MongooseConnection.disconnect();
    return NextResponse.json({ message: 'Address Book created successfully', class: newAddress });
  } catch (error) {
    return NextResponse.error();
  }
}
