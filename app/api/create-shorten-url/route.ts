/* eslint-disable no-underscore-dangle */
import MongooseConnection from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import { customAlphabet } from 'nanoid';
import ShortenUrl from '@/models/shortenUrl';
import Invoice from '@/models/invoice';

export async function GET(request: NextRequest) {
  try {
    await MongooseConnection.connectAdmin();
    const code = request.nextUrl.searchParams.get('code');
    const shortenUrl = await ShortenUrl.findOne({ shortenURL: code }).populate('invoiceId');

    if (!shortenUrl) {
      await MongooseConnection.disconnect();
      return NextResponse.json({ message: 'Shorten URL not found' });
    }

    const clientAddress = await Invoice.findOne({ _id: shortenUrl.invoiceId._id }).populate('billTo');
    await MongooseConnection.disconnect();
    return NextResponse.json({ shortenUrl, clientAddress });
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
