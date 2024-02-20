"use client";
import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSignUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      console.log(user);
    } catch (e) {
      toast({
        title: "Error",
        description: "Email already in use.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col justify-between border p-10 rounded-lg w-96 h-[350px]">
        <h1 className="text-2xl mb-5 font-semibold text-center">Sign up</h1>
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
        <Button onClick={handleSignUp} disabled={true && (!email || !password)}>
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
