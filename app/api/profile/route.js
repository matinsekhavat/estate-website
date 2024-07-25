import profileModel from "@/app/_models/Profile";
import userModel from "@/app/_models/User";
import connectToDb from "@/app/_utils/connectToDb";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
export async function POST(req) {
  try {
    await connectToDb();
    const body = await req.json();
    const {
      title,
      description,
      location,
      phone,
      realState,
      price,
      constructionDate,
      category,
      amenities,
      rules,
    } = body;
    const session = await getServerSession(req); // instead of authOptions we say req
    if (!session) {
      return NextResponse.json(
        { error: "ابتدا وارد حساب خود شوید" },
        { status: 401 }
      );
    }

    const user = await userModel.findOne({ email: session.user.email });
    console.log(user, session);
    if (!user) {
      return NextResponse.json(
        { error: "همچین کاربری یافت نشد" },
        { status: 404 }
      );
    }

    if (
      !title ||
      !location ||
      !description ||
      !phone ||
      !realState ||
      !price ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 400 }
      );
    }

    //create profile
    const newProfile = await profileModel.create({
      title,
      description,
      location,
      phone,
      realState,
      constructionDate,
      amenities,
      rules,
      category,
      price: +price,
      userId: new Types.ObjectId(user._id),
    });
    return NextResponse.json(
      { message: "آگهی با موفقیت ثبت شد" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "مشکلی در سرور هست" }, { status: 500 });
  }
}
