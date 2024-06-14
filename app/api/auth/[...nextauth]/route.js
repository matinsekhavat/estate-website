import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import userModel from "@/app/_models/User";
import connectToDb from "@/app/_utils/connectToDb";
import { verifyPassword } from "@/app/_utils/auth";

const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error("اطلاعات معتبر وارد نمایید.");
        }

        try {
          await connectToDb();
        } catch (error) {
          console.error("Error connecting to database:", error);
          throw new Error("Internal server error.");
        }

        let user;
        try {
          user = await userModel.findOne({ email });
        } catch (error) {
          console.error("Error fetching user:", error);
          throw new Error("Internal server error.");
        }

        if (!user) {
          throw new Error("لطفا ابتدا ثبت نام نمایید");
        }

        let isValid;
        try {
          isValid = await verifyPassword(password, user.password);
        } catch (error) {
          console.error("Error verifying password:", error);
          throw new Error("Internal server error.");
        }

        if (!isValid) throw new Error("رمز یا ایمیل اشتباه است.");

        return { email };
      },
    }),
  ],
};

// static code

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
