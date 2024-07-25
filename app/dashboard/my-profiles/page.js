import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import React from "react";
import connectToDb from "@/app/_utils/connectToDb";
import User from "@/app/_models/User";
import { redirect } from "next/dist/server/api-utils";

async function MyProfiles() {
  await connectToDb();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  //   this code check auth
  const user = await User.aggregate([
    { $match: { email: session.user.email } }, //find this user then {}2
    {
      $lookup: {
        from: "profiles", //go to profiles model (add  s proulal)
        foreignField: "userId", // userId of match part
        localField: "_id", //_id user sould be equal with userId of User model
        as: "profiles", // key value we can accesss
      },
    },
  ]);
  console.log(user[0].profiles);
  return <div>MyProfiles</div>;
}

export default MyProfiles;
