// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { saveUserToSanity } from "@/lib/saveUser";
// import { client } from "@/lib/client";

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         if (
//           credentials?.email === "admin@example.com" &&
//           credentials?.password === "admin123"
//         ) {
//           const user = {
//             id: "1",
//             name: "Admin",
//             email: "admin@example.com",
//             image: null,
//             isAdmin: true,
//           };

//           await saveUserToSanity({
//             email: user.email,
//             fullName: user.name,
//             image: user.image ?? "",
//             isAdmin: false,
//           });

//           return user;
//         }
//         return null;
//       },
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   pages: {
//     signIn: "/login",
//   },
//   session: {
//     strategy: "jwt" as const,
//   },
//   callbacks: {
//     async signIn({ user }: any) {
//       await saveUserToSanity({
//         email: user.email!,
//         fullName: user.name!,
//         image: user.image || "",
//         isAdmin: true, // default unless overridden
//       });
//       return true;
//     },
//     async jwt({ token, user }: any) {
//       if (user) {
//         token.email = user.email;
//       }
//       return token;
//     },
//     async session({ session, token }: any) {
//       session.user.email = token.email;

//       // fetch isAdmin from Sanity
//       const userInSanity = await client.fetch(
//         `*[_type == "user" && email == $email][0]`,
//         { email: token.email }
//       );

//       session.user.isAdmin = userInSanity?.isAdmin ?? false;
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
