import React from "react";
import styles from "./DashboardSidebar.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
async function DashboardSidebar({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        <p>{session.user.email}</p>
        <span></span>
        <Link href="/dashboard">حساب کاربری</Link>
        <Link href="/dashboardmy-profiles">آگهی های من</Link>
        <Link href="/dashboard/add">ثبت آگهی</Link>
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default DashboardSidebar;
