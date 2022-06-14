import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import Email from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

const handler: NextApiHandler = (req, res) =>
  NextAuth(req, res, {
    adapter: PrismaAdapter(prisma),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID!,
        clientSecret: process.env.GOOGLE_SECRET!,
      }),
      Email({
        server: {
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT),
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
          },
          from: process.env.SMTP_FROM,
        },
      }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    debug:
      process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test",
  });

export default handler;
