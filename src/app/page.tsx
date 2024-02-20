"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession({
    required: true,
  });

  async function handleOnClick() {
    await signOut();
  }

  return (
    <div>
      <div className="flex items-center justify-between px-10 w-full h-[60px] py-2 border-b">
        <div>
          <span>Hello, {session?.data?.user?.email}</span>
        </div>
        <Button variant="outline" onClick={() => handleOnClick()}>
          Log out
        </Button>
      </div>
    </div>
  );
}
