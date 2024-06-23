import { eq } from 'drizzle-orm';
import { db } from './index';
import { InsertUser, SelectUser, usersTable } from './schema';

export async function createUser(data: InsertUser) {
  await db.insert(usersTable).values(data);
}


export async function getUserById(id: SelectUser['id']): Promise<
  Array<{
    id: number;
    prenom: string;
    dob: string;
    email: string;
    invitecode: string;
  }>
> {
  return db.select().from(usersTable).where(eq(usersTable.id, id));
}

export async function getUserByInviteCode(invitecode: SelectUser['invitecode']): Promise<
  Array<{
    id: number;
    prenom: string;
    dob: string;
    email: string;
    invitecode: string;
  }>
> {
  return db.select().from(usersTable).where(eq(usersTable.invitecode, invitecode));
}

export async function deleteUser(id: SelectUser['id']) {
  await db.delete(usersTable).where(eq(usersTable.id, id));
}

export function generateInviteCode(length: number = 10): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
