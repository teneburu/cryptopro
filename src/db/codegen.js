#!/usr/bin/env node
import { db } from './db'; // Ensure this points to your database connection file
import { inviteCodesTable } from './schema'; // Ensure this points to your schema file
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv)).argv;

function generateInviteCode(length = 10) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

async function populateInviteCodes(tier, count) {
    const codes = [];
    for (let i = 0; i < count; i++) {
        codes.push({
            code: generateInviteCode(),
            tier: tier
        });
    }

    for (const code of codes) {
        await db.insertInto(inviteCodesTable).values(code).execute();
    }

    console.log(`${count} ${tier} invite codes have been populated`);
}

async function main() {
    const tiers = ['free', 'bronze', 'silver', 'gold', 'premium', 'master', 'elite'];
    
    for (const tier of tiers) {
        if (argv[tier]) {
            const count = parseInt(argv[tier], 10);
            await populateInviteCodes(tier, count);
        }
    }
}

main().catch(console.error);
