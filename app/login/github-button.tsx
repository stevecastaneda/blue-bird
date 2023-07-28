"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";

export default function GitHubButton() {
  const supabase = createClientComponentClient<Database>();

  async function handleSignIn() {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  }

  return (
    <button
      onClick={handleSignIn}
      className="flex items-center border-gray-700 hover:bg-slate-800 px-3 py-2 border rounded-md"
    >
      <Image
        src="/github-mark-white.svg"
        width={24}
        height={24}
        alt="Sign in with Github"
      />
      <span className="ml-2">Sign in with GitHub</span>
    </button>
  );
}
