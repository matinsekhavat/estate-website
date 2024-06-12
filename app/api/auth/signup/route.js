const { NextResponse } = require("next/server");
import userModel from "@/app/_models/User";
import connectToDb from "@/app/_utils/connectToDb";
import { hashPassword } from "@/app/_utils/auth";

export async function POST(req) {
  try {
    await connectToDb();
    const body = req.json();
    const { email, password } = body;
    //validate Data
    if (!email.trim() || !password.trim()) {
      NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد نمایید." },
        {
          status: 422,
        }
      );
    }

    //check is user existed?
    const isUserExisting = await userModel.findOne({ email });
    if (isUserExisting) {
      return NextResponse.json(
        { error: "حساب کاربری با این ایمیل از قبل ایجاد شده است" },
        { status: 422 }
      );
    }

    const hashedpassword = await hashPassword(password);

    //create new user
    const newUser = await userModel.create({
      email,
      password: hashedpassword,
    });

    return NextResponse.json({ message: "حساب شما با موفقیت ثبت نام شد" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "sth went wrong in server" },
      {
        status: 500,
      }
    );
  }
}
