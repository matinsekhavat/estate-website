import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import DashboardPage from "../_components/template/DashboardPage";
import userModel from "../_models/User";
async function page() {
  const session = await getServerSession(authOptions);
  const user = await userModel.findOne({ email: session?.user.email });
  const timeStamps = user?.createdAt;

  if (!session) redirect("/signin");
  return <DashboardPage timeStamps={timeStamps} />;
}

export default page;
