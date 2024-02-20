"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col justify-between border p-10 rounded-lg w-96 h-[350px]">
        <h1 className="text-2xl mb-5 font-semibold text-center">Sign In</h1>
        <div className="space-y-2">
          <Label id="email">Email</Label>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="space-y-1"
          />
        </div>

        <div className="space-y-2">
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button onClick={handleSignIn} disabled={true && (!email || !password)}>
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default SignIn;
