import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import clientPromise from '../../../../../lib/mongodb';
import { isAuthenticated } from '../../../../../lib/auth';

export async function POST(request) {
  try {
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id, subject, message } = await request.json();

    if (!id || !subject || !message) {
      return NextResponse.json(
        { error: 'Email ID, subject, and message are required' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db('ScribleeWaitlist');
    const collection = db.collection('waitlist');

    const emailDoc = await collection.findOne({ _id: new ObjectId(id) });

    if (!emailDoc) {
      return NextResponse.json(
        { error: 'Email not found' },
        { status: 404 }
      );
    }

    await collection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          lastRepliedAt: new Date(),
          lastReplySubject: subject,
          lastReplyMessage: message,
        },
      }
    );

    return NextResponse.json(
      {
        message: 'Email sent successfully',
        recipient: emailDoc.email,
        subject,
        message,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}







