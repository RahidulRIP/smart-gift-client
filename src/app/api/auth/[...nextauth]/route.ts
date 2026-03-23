import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // আপনার ব্যাকএন্ড এপিআই কল
          const res = await axios.post("http://localhost:5000/api/auth/login", {
            email: credentials?.email,
            password: credentials?.password,
          });

          const user = res.data.data;

          // যদি ইউজার ডাটা থাকে, তবে সেটি রিটার্ন করুন (এটি সেশনে সেভ হবে)
          if (user) {
            return {
              id: user._id || user.id,
              name: user.name,
              email: user.email,
              ...user, 
            };
          }
          return null;
        } catch (error) {
          const axiosError = error as any;
          throw new Error(axiosError.response?.data?.message || "Invalid email or password");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }: any) {
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
