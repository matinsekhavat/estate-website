const { NextResponse } = require("next/server");
import userModel from "@/app/_models/User";
import connectToDb from "@/app/_utils/connectToDb";
import { hashPassword } from "@/app/_utils/auth";
