import { date, pgTable, serial, text } from "drizzle-orm/pg-core";
import { z } from "zod";

export const usersTable = pgTable("users_table", {
    id: serial("id").primaryKey(),
    prenom: text("prenom").notNull(),
    dob: date("dob").notNull(),
    email: text("email").notNull().unique(),
    invitecode: text("invitecode").notNull().unique(),
})

export type InsertUser = typeof usersTable.$inferInsert
export type SelectUser = typeof usersTable.$inferSelect

export const FormSchema = z.object({
  prenom: z.string({message: "Veuillez renseigner votre prénom."}).min(2, {message: "Votre prénom semble incorrect."}).max(16, {message: "Votre prénom semble incorrect."}).regex(/^[A-Za-z]+$/i, "Votre prénom semble incorrect."),
  dob: z.string({message: "Veuillez renseigner votre date de naissance."}).date(),
  email: z.string({message: "Veuillez renseigner votre adresse email."}).email(),
  invitecode: z.string({message: "Veuillez renseigner votre code d'invitation. Si vous n'en disposez pas, contactez nous."}).min(10).max(10),
}).required();