import MongooseConnection from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import { customAlphabet } from 'nanoid';
import ShortenUrl from '@/models/shortenUrl';
import Invoice from '@/models/invoice';

export async function GET(request: NextRequest) {
  try {
    await MongooseConnection.connectAdmin();
    const code = request.nextUrl.searchParams.get('code');
    const addresses = await ShortenUrl.find({ shortenURL: code }).populate('invoiceId');

    // Map each ShortenUrl document to a promise that populates the invoice field
    const addressPromises = addresses.map(async (address) => {
      address.invoice = await Invoice.findOne({ _id: address.invoiceId });
      return address;
    });

    // Wait for all promises to resolve
    const populatedAddresses = await Promise.all(addressPromises);

    await MongooseConnection.disconnect();
    return NextResponse.json({ addresses: populatedAddresses });
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
