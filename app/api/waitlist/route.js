import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

const LOOPS_API_KEY = '05d3f799ef508c31b2a03c700c02e79a';
const LOOPS_API_URL = 'https://app.loops.so/api/v1/contacts/create';
const BASE_COUNT = 250;

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('ScribleeWaitlist');
    const collection = db.collection('waitlist');

    const count = await collection.countDocuments();
    const totalCount = BASE_COUNT + count;

    return NextResponse.json(
      { count: totalCount },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to get waitlist count', count: BASE_COUNT },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('ScribleeWaitlist');
    const collection = db.collection('waitlist');

    const existingEmail = await collection.findOne({ email: email.toLowerCase() });

    if (existingEmail) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    const result = await collection.insertOne({
      email: email.toLowerCase(),
      createdAt: new Date(),
    });

    try {
      const loopsResponse = await fetch(LOOPS_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${LOOPS_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.toLowerCase(),
          source: 'Waitlist Signup',
        }),
      });

      if (!loopsResponse.ok) {
        const loopsError = await loopsResponse.json().catch(() => ({}));
      }
    } catch (loopsError) {
    }

    const newCount = await collection.countDocuments();
    const totalCount = BASE_COUNT + newCount;

    return NextResponse.json(
      { 
        message: 'Email added to waitlist successfully', 
        id: result.insertedId,
        count: totalCount
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to add email to waitlist' },
      { status: 500 }
    );
  }
}



