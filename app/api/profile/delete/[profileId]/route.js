import connectToDb from "@/app/_utils/connectToDb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import userModel from "@/app/_models/User";
import profileModel from "@/app/_models/Profile";
export async function DELETE(req, context) {
  try {
    await connectToDb();
    const id = context.params.profileId;
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json({ error: "وارد حسابت شو" }, { status: 401 });
    }

    const user = await userModel.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "همچین کاربری یافت نشد" },
        { status: 404 }
      );
    }

    const profile = profileModel.findOne({
      _id: id,
    });
    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        {
          error: "دسترسی شما به اگهی محدود است",
        },
        { status: 403 }
      );
    }

    await profile.deleteOne({ _id: id });
    return NextResponse.json({ message: "حذف شد" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "مشکلی در سرور هست" }, { status: 500 });
  }
}
