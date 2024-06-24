import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db/index';
import { inviteCodesTable } from '@/db/schema';
import { eq, and, sql } from 'drizzle-orm';

export async function POST(req: NextRequest) {
  const { invitecode } = await req.json();

  const inviteCodeRecords = await db
    .select()
    .from(inviteCodesTable)
    .where(and(eq(inviteCodesTable.code, invitecode), sql`${inviteCodesTable.usesLeft} > 0`));

  const inviteCodeRecord = inviteCodeRecords[0];

  if (!inviteCodeRecord) {
    return NextResponse.json({ error: 'Invalid or already used invite code.' }, { status: 400 });
  }

  await db.update(inviteCodesTable)
    .set({
      timesUsed: sql`${inviteCodesTable.timesUsed} + 1`,
      usesLeft: sql`${inviteCodesTable.maxUses} - (${inviteCodesTable.timesUsed} + 1)`,
    })
    .where(eq(inviteCodesTable.code, invitecode))
    .execute();

  return NextResponse.json({ tier: inviteCodeRecord.tier });
}
