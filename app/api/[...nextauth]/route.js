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

        try {
          await connectToDb();
        } catch (error) {
          throw new Error("error in auth", error.message);
        }

        if (!email || !password) {
          throw new Error("اطلاعات معتبر وارد نمایید.");
        }

        const user = userModel.findOne({ email });
        if (!user) {
          throw new Error("لطفا ابتدا ثبت نام نمایید");
        }

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) throw new Error("رمز یا ایمیل اشتباه است.");
        return { email };
      },
    }),
  ],
};

// static code

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
