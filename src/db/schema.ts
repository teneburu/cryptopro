import { date, pgTable, serial, text, integer, pgEnum, foreignKey } from "drizzle-orm/pg-core";
import { z } from "zod";

export const tierEnum = pgEnum('tier', ['free', 'bronze', 'silver', 'gold', 'premium', 'master', 'elite']);

export const inviteCodesTable = pgTable("invite_codes", {
    id: serial("id").primaryKey(),
    code: text("code").notNull().unique(),
    tier: tierEnum("tier").notNull(), 
    maxUses: integer("max_uses").notNull().default(1),
    timesUsed: integer("times_used").notNull().default(0),
    usesLeft: integer("uses_left").notNull().default(1),
});

export type InsertInviteCode = typeof inviteCodesTable.$inferInsert;
export type SelectInviteCode = typeof inviteCodesTable.$inferSelect;

export const usersTable = pgTable("users_table", {
    id: serial("id").primaryKey(),
    prenom: text("prenom").notNull(),
    dob: date("dob").notNull(),
    email: text("email").notNull().unique(),
    invitecode: text("invitecode").notNull(),
    tier: tierEnum("tier").notNull().default('free'), 
}, (usersTable) => ({
    foreignKeys: [
        foreignKey({
            columns: [usersTable.invitecode],
            foreignColumns: [inviteCodesTable.code]
        })
    ]
}));

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export const FormSchema = z.object({
  prenom: z.string({ message: "Veuillez renseigner votre prénom." })
    .min(2, { message: "Votre prénom semble incorrect." })
    .max(16, { message: "Votre prénom semble incorrect." })
    .regex(/^[A-Za-z]+$/i, "Votre prénom semble incorrect."),
  dob: z.string({ message: "Veuillez renseigner votre date de naissance." })
    .refine((val) => !isNaN(Date.parse(val)), { message: "Date de naissance invalide." }),
  email: z.string({ message: "Veuillez renseigner votre adresse email." })
    .email({ message: "Veuillez renseigner votre adresse email." }),
  invitecode: z.string({ message: "Veuillez renseigner votre code d'invitation." })
    .min(10)
    .max(10),
}).required();
