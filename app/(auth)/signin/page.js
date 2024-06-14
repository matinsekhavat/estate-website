import React from "react";
import SigninPage from "./../../_components/template/SigninPage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
async function page() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return <SigninPage />;
}

export default page;
