import userModel from "@/app/_models/User";
import connectToDb from "@/app/_utils/connectToDb";
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
    } = await req.json();
    const session = await getServerSession(req); // instead of authOptions we say req
    if (!session) {
      return NextResponse.json(
        { error: "ابتدا وارد حساب خود شوید" },
        { status: 401 }
      );
    }

    const user = userModel.findOne({ email: session.user.email });

    if (!user) {
      return NextResponse.json(
        { error: "همچین کاربری یافت نشد" },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: "مشکلی در سرور هست" }, { status: 500 });
  }
}
