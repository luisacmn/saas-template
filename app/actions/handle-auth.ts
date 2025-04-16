"user server";

import { signIn } from "next-auth/react";

export default function handleAuth() {
  signIn("google");
}
