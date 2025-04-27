import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { adminApp } from "./firebase"; // IMPORTA adminApp
import { FirestoreAdapter } from "@auth/firebase-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      authorization: {
        params: {
          prompt: "consent",
        },
      },
    }),
  ],
  adapter: FirestoreAdapter(adminApp), // PASSA adminApp DIRETO
});
