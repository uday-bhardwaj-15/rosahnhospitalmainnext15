import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { saveUserToSanity } from "@/lib/saveUser";
import { client } from "@/lib/client";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.email === "admin@example.com" &&
          credentials?.password === "admin123"
        ) {
          const user = {
            id: "1",
            name: "Admin",
            email: "admin@example.com",
            image: null,
            isAdmin: true,
          };

          await saveUserToSanity({
            email: user.email,
            fullName: user.name,
            image: user.image ?? "",
            isAdmin: false,
          });

          return user;
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user }) {
      await saveUserToSanity({
        email: user.email!,
        fullName: user.name!,
        image: user.image || "",
        isAdmin: false,
      });
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email as string;
        (session.user as any).isAdmin =
          (await client.fetch(
            `*[_type == "user" && email == $email][0].isAdmin`,
            { email: token.email }
          )) ?? false;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
