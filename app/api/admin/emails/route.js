import { NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb';
import { isAuthenticated } from '../../../../lib/auth';

export async function GET() {
  try {
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const client = await clientPromise;
    const db = client.db('ScribleeWaitlist');
    const collection = db.collection('waitlist');

    const emails = await collection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    const formattedEmails = emails.map((email) => ({
      id: email._id.toString(),
      email: email.email,
      createdAt: email.createdAt,
    }));

    return NextResponse.json({ emails: formattedEmails }, { status: 200 });
  } catch (error) {
    console.error('Error fetching emails:', error);
    return NextResponse.json(
      { error: 'Failed to fetch emails' },
      { status: 500 }
    );
  }
}







