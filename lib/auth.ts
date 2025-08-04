// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// export function auth() {
//   return getServerSession(authOptions);
// }
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import type { NextAuthOptions } from "next-auth";

export function auth() {
  return getServerSession(authOptions as NextAuthOptions);
}
