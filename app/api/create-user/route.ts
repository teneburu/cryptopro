import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db/index';
import { usersTable } from '@/db/schema';
import { InsertUser } from '@/db/schema';

export async function POST(req: NextRequest) {
  const userData: InsertUser = await req.json();

  await db.insert(usersTable).values(userData);

  return NextResponse.json({ success: true });
}
