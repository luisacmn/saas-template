"use server";

import { FirestoreAdapter } from "@auth/firebase-adapter";
import { auth, signIn, signOut } from "../lib/auth";
import { db } from "../lib/firebase";

export async function handleAuth() {
  const session = await auth();

  if (session) {
    return await signOut({ redirectTo: "/" });
  }

  return await signIn("google", {
    redirectTo: "/dashboard",
    adapter: FirestoreAdapter(db),
  });
}
