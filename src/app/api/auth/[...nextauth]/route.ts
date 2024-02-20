import NextAuth from "next-auth";
import { auth } from "../../../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {},
      async authorize(credentials): Promise<any> {
        return await signInWithEmailAndPassword(
          auth,
          (credentials as any).email || "",
          (credentials as any).password || ""
        )
          .then((userCredential) => {
            if (userCredential.user) {
              return userCredential.user;
            }

            return null;
          })
          .catch((err) => console.log(err));
      },
    }),
  ],
});

export { handler as GET, handler as POST };
