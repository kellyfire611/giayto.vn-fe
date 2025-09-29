import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
// hoặc dùng Google, GitHub,... tùy bạn

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // gọi API backend check login
        if (credentials?.username === "admin" && credentials?.password === "123") {
          return { id: "1", name: "Admin", role: "admin" };
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = (user as any).role;
      return token;
    },
    async session({ session, token }) {
      (session.user as any).role = token.role;
      return session;
    }
  }
});

export { handler as GET, handler as POST };
