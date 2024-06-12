const { NextResponse } = require("next/server");
import userModel from "@/app/_models/User";
import connectToDb from "@/app/_utils/connectToDb";
import { hashPassword } from "@/app/_utils/auth";

export async function POST(req) {
  try {
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
